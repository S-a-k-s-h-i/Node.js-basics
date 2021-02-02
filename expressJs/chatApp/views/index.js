// let allMessages=[];
let messages=document.getElementById("messages");
let textbox1=document.getElementById("textbox1");
let textbox2=document.getElementById("textbox2");
let button1=document.getElementById("button1");
let button2=document.getElementById("button2");
let user1=document.getElementById("user1");
let user2=document.getElementById("user2");
let u1,u2;
let firstu1=true;
let firstu2=true;
user1.addEventListener('change',() => {
   button1.disabled=false;button2.disabled=false;
   if(firstu1){messages.innerHTML='';u1=user1.value;firstu1=false;}
   else {messages.innerHTML='';history();u1=user1.value;firstu1=true;}

   if(u1==u2){button1.disabled=true;button2.disabled=true;};
})
user2.addEventListener('change',() => {
   button2.disabled=false;button1.disabled=false;
   if(firstu2){messages.innerHTML='';u2=user2.value;firstu2=false;}
   else {messages.innerHTML='';history();u2=user2.value;firstu2=true;}

   if(u1==u2){button2.disabled=true;button1.disabled=true;};
})
function conversation(senderMsg,receiverMsg,sender,recipient){
   this.senderMsg=senderMsg;
   this.receiverMsg=receiverMsg;
   this.sender=sender;
   this.recipient=recipient;
};
button1.addEventListener('click',() => {
   if(textbox1 && textbox1.value){
      let senderconv=new conversation(textbox1.value,null,u1,u2);
      let xhr = new XMLHttpRequest();
      xhr.open('POST', "/messages", true);
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
      xhr.send(JSON.stringify(senderconv)); 
      xhr.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            senderAddingToMessageBox(senderconv);
            textbox1.value="";
         }
       };
     }
   })
button2.addEventListener('click',() => {
   if(textbox2 && textbox2.value){
      let receiverconv=new conversation(null,textbox2.value,u2,u1);
      let xhr = new XMLHttpRequest();
      xhr.open('POST', "/messages", true);
      xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
      xhr.send(JSON.stringify(receiverconv)); 
      xhr.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            receiverAddingToMessageBox(receiverconv);
            textbox2.value="";
         }
       };
      }
   })
// console.log(allMessages);
function senderAddingToMessageBox(senderconv){
   let user1Message=document.createElement("div");
   user1Message.classList.add("msg1");
   user1Message.innerHTML=senderconv.senderMsg;
   let span=document.createElement('span');
   span.classList.add("sender");
   let sender=document.createTextNode(senderconv.sender);
   span.appendChild(sender);
   user1Message.appendChild(span);
   messages.appendChild(user1Message);
}
function receiverAddingToMessageBox(receiverconv){
   let user2Message=document.createElement("div");
   user2Message.classList.add("msg2");
   user2Message.innerHTML=receiverconv.receiverMsg;
   let span=document.createElement('span');
   span.classList.add("sender");
   let receiver=document.createTextNode(receiverconv.sender);
   span.appendChild(receiver);
   user2Message.appendChild(span);
   messages.appendChild(user2Message)
}
// console.log(allMessages);

function history(){ 

     let xhr = new XMLHttpRequest();
     xhr.open('GET', "/messages", true);
     xhr.send()
     xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          for(let d=0;d<allMessages.length;d++){
             if(allMessages[d].senderMsg!=null)senderAddingToMessageBox(allMessages[d]);
             else receiverAddingToMessageBox(allMessages[d]);
            } 
      }
    };
}

