let messages = document.getElementById("messages");
let textbox1 = document.getElementById("textbox1");
let textbox2 = document.getElementById("textbox2");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let user1 = document.getElementById("user1");
let user2 = document.getElementById("user2");
let msg = document.getElementsByClassName("msg1");
let delBox = document.getElementById("delete");
let loader = document.getElementById('loader');
let deletee = document.getElementById('delete');
let u1,del,u2,idOfMessage = 0;
let firstu1 = true;
let firstu2 = true;
user1.addEventListener('change',() => {
   button1.disabled = false;button2.disabled=false;
   messages.innerHTML = '';
   u1 = user1.value;
   history();
   if(u1==u2){button1.disabled=true;button2.disabled=true;};
})
user2.addEventListener('change',() => {
   button2.disabled = false;button1.disabled = false;
   messages.innerHTML = '';
   u2 = user2.value;
   history();
   if(u1==u2){button2.disabled = true;button1.disabled = true;};
})
function conversation(senderMsg,receiverMsg,sender,recipient){
   this.id = idOfMessage+1;
   this.senderMsg = senderMsg;
   this.receiverMsg = receiverMsg;
   this.sender = sender;
   this.recipient = recipient;
   idOfMessage++;
};
button1.addEventListener('click',() => {
   if(textbox1 && textbox1.value){
      let senderconv = new conversation(textbox1.value,null,u1,u2);
      let xhr = new XMLHttpRequest();
      xhr.open('POST', "/messages", true);
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
      xhr.send(JSON.stringify(senderconv)); 
      loader.classList.add('fa-spin');
      xhr.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            senderAddingToMessageBox(senderconv);
            textbox1.value = "";
            loader.classList.remove('fa-spin');
         }
       };
     }
   })
button2.addEventListener('click',() => {
   if(textbox2 && textbox2.value){
      let receiverconv = new conversation(null,textbox2.value,u2,u1);
      let xhr = new XMLHttpRequest();
      xhr.open('POST', "/messages", true);
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
      xhr.send(JSON.stringify(receiverconv)); 
      loader.classList.add('fa-spin');
      xhr.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            receiverAddingToMessageBox(receiverconv);
            textbox2.value = "";
            loader.classList.remove('fa-spin');
         }
       };
      }
   })
function senderAddingToMessageBox(senderconv){
   let user1Message = document.createElement("div");
   user1Message.classList.add("msg1");
   user1Message.innerHTML = senderconv.senderMsg;
   let span = document.createElement('span');
   span.classList.add("sender");
   let sender = document.createTextNode(senderconv.sender);
   span.appendChild(sender);
   user1Message.appendChild(span);
   user1Message.onmouseover = function(){
      delBox.innerHTML = `<i class='fa fa-trash-o fa-2x' onclick='deleteMessage(${ JSON.stringify(senderconv) })'></i>`
   }
   messages.appendChild(user1Message);
}
function receiverAddingToMessageBox(receiverconv){
   let user2Message = document.createElement("div");
   user2Message.classList.add("msg2");
   user2Message.innerHTML = receiverconv.receiverMsg;
   let span = document.createElement('span');
   span.classList.add("sender");
   let receiver = document.createTextNode(receiverconv.sender);
   span.appendChild(receiver);
   user2Message.appendChild(span);
   user2Message.onmouseover = function(){
      delBox.innerHTML = `<i class='fa fa-trash-o fa-2x' onclick='deleteMessage(${ JSON.stringify(receiverconv) })'></i>`
   }
   messages.appendChild(user2Message);  
}

function history(){ 
   xhr=new XMLHttpRequest();
   xhr.open('GET','http://localhost:3000/messages',true);
   xhr.send();
   loader.classList.add('fa-spin');
   xhr.onload = function(){
      allMessages = JSON.parse(xhr.response);
      let sender_messages = allMessages.filter(m=> (m.sender==u1 && m.recipient==u2) || (m.sender==u2 && m.recipient==u1));
      console.log("sender msg",sender_messages);
      if(sender_messages){
         for(let d=0;d<sender_messages.length;d++){
            if(sender_messages[d].senderMsg!=null)senderAddingToMessageBox(sender_messages[d]);
            else receiverAddingToMessageBox(sender_messages[d]);
           }
      } 
      loader.classList.remove('fa-spin');
  }
}
window.addEventListener("load",function(){
   u1 = "bulbul";
   u2 = "bulbul";
   button1.disabled = true;
   button2.disabled = true;
});

function deleteMessage(conv){
   xhr=new XMLHttpRequest();
   xhr.open('DELETE',`http://localhost:3000/messages/${conv.id}`,true);
   xhr.send();
   loader.classList.add('fa-spin');
   xhr.onload = function(){
      console.log('response',xhr.response);
      loader.classList.remove('fa-spin');
      location.reload();
   }  
}






