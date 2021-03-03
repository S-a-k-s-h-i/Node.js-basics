import { requestFunction } from './requestxmlHttp.js';
let messages = document.getElementById("messages");
let textbox1 = document.getElementById("textbox1");
let textbox2 = document.getElementById("textbox2");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let user1 = document.getElementById("user1");
let user2 = document.getElementById("user2");
let delBox = document.getElementById("delete");
let loader = document.getElementById('ld');
let u1,u2,sender_messages,idOfMessage = 0;
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
//    this.id = idOfMessage+1;
   this.senderMsg = senderMsg;
   this.receiverMsg = receiverMsg;
   this.sender = sender;
   this.recipient = recipient;
//    idOfMessage++;
};
button1.addEventListener('click',() => {
   if(textbox1 && textbox1.value){
      let senderconv = new conversation(textbox1.value,null,u1,u2);
      requestFunction('post',senderconv,senderAddingToMessageBox,null,loader,null,null);
     }
   })
button2.addEventListener('click',() => {
   if(textbox2 && textbox2.value){
      let receiverconv = new conversation(null,textbox2.value,u2,u1);
      requestFunction('post',receiverconv,null,receiverAddingToMessageBox,loader,null,null);
      }
   }
   )
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
      delBox.innerHTML = `<i class='fa fa-trash-o fa-2x' id='deleteMe'></i>`
      document.getElementById ('deleteMe').addEventListener ("click",function(){
         deleteMessage(senderconv.id);
      }, false);
   }
   messages.appendChild(user1Message);
   textbox1.value='';
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
      // delBox.innerHTML = `<i class='fa fa-trash-o fa-2x' onclick='deleteMessage(${JSON.stringify(receiverconv.id)})'></i>`;
      delBox.innerHTML = `<i class='fa fa-trash-o fa-2x' id='deleteMe'></i>`
      document.getElementById ('deleteMe').addEventListener ("click",function(){
         deleteMessage(receiverconv.id)
      }, false);
      console.log(delBox.innerHTML);
   }
   messages.appendChild(user2Message);  
   textbox2.value='';
}



function history(){ 
   requestFunction('get',conversation,senderAddingToMessageBox,receiverAddingToMessageBox,loader,u1,u2);
   function conversation(res){
      sender_messages = JSON.parse(res);
      console.log("sender msg",sender_messages);
         for(let d=0;d<sender_messages.length;d++){
            if(sender_messages[d].senderMsg!=null)senderAddingToMessageBox(sender_messages[d]);
            else receiverAddingToMessageBox(sender_messages[d]);
            }
       }
}

function deleteMessage(conv){
   requestFunction('delete',conv,null,null,loader,null,null);
}

window.addEventListener("load",function(){
   u1 = "bulbul";
   u2 = "bulbul";
   button1.disabled = true;
   button2.disabled = true;
});







