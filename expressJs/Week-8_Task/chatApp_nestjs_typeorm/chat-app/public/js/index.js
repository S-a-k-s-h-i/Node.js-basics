import { requestFunction,logout } from './requestxmlHttp.js';
let messages = document.getElementById("messages");
let textbox1 = document.getElementById("textbox1");
let textbox2 = document.getElementById("textbox2");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let user1 = document.getElementById("user1");
let user2 = document.getElementById("user2");
let delBox = document.getElementById("delete");
let loader = document.getElementById('ld');
let log=document.getElementById('logout');
let u1,u2,sender_messages,idOfMessage = 0;

log.addEventListener('click',() => {
    logout();
    alert('logout successfully')
})
u1={ id:user1.value, value:user1.options[0].text };
u2={ id:user2.value, value:user2.options[0].text };
console.log('u1',u1);
console.log('u2',u2);

user2.addEventListener('change',(sel) => {
   u2.id=user2.options[user2.selectedIndex].value;
   u2.value=user2.options[user2.selectedIndex].text;
   messages.innerHTML = '';
   console.log('on change u2',u2);
   history();
})


function conversation(senderMsg,receiverMsg,sender,recipient){
   this.senderMsg = senderMsg;
   this.receiverMsg = receiverMsg;
   this.sender = sender;
   this.recipient = recipient;
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
      delBox.innerHTML = `<i class='fa fa-trash-o fa-2x' id='deleteMe'></i>`
      document.getElementById ('deleteMe').addEventListener ("click",function(){
         deleteMessage(receiverconv.id)
      }, false);
   }
   messages.appendChild(user2Message);  
   textbox2.value='';
}



function history(){ 
   requestFunction('get',conversation,senderAddingToMessageBox,receiverAddingToMessageBox,loader,u1.id,u2.id);
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








