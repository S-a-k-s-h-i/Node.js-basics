let allMessages=[];
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
   if(firstu1){button1.disabled=false;button2.disabled=false;u1=user1.value;firstu1=false;}
   else {messages.innerHTML='';history();u1=user1.value;firstu1=true;}

   if(u1==u2){button1.disabled=true;button2.disabled=true;};
})
user2.addEventListener('change',() => {
   if(firstu2){button2.disabled=false;button1.disabled=false;u2=user2.value;firstu2=false;console.log('u1',u1);console.log('u2',u2);if(u1==u2){button2.disabled=true;}}
   else {messages.innerHTML='';history();u2=user2.value;firstu2=true;}

   if(u1==u2){button2.disabled=true;button1.disabled=true;};
})
function conversation(msg,sender,recipient){
   this.msg=msg;
   this.sender=sender;
   this.recipient=recipient;
};
button1.addEventListener('click',() => {
   if(textbox1 && textbox1.value){
      var senderconv=new conversation(textbox1.value,u1,u2);
      allMessages.push(senderconv);
      senderAddingToMessageBox(senderconv);
      textbox1.value="";
     }
   })
button2.addEventListener('click',() => {
   if(textbox2 && textbox2.value){
      var receiverconv=new conversation(textbox2.value,u2,u1);
      allMessages.push(receiverconv);
      receiverAddingToMessageBox(receiverconv);
      textbox2.value="";
      }
   })
console.log(allMessages);
function senderAddingToMessageBox(senderconv){
   var user1Message=document.createElement("div");
   user1Message.classList.add("msg1");
   user1Message.innerHTML=senderconv.msg;
   var span=document.createElement('span');
   span.classList.add("sender");
   var sender=document.createTextNode(senderconv.sender);
   span.appendChild(sender);
   user1Message.appendChild(span);
   messages.appendChild(user1Message);
}
function receiverAddingToMessageBox(receiverconv){
   var user2Message=document.createElement("div");
   user2Message.classList.add("msg2");
   user2Message.innerHTML=receiverconv.msg;
   var span=document.createElement('span');
   span.classList.add("sender");
   var receiver=document.createTextNode(receiverconv.sender);
   span.appendChild(receiver);
   user2Message.appendChild(span);
   messages.appendChild(user2Message)
}
console.log(allMessages);

function history(){
    

   for(let d=0;d<allMessages.length;d++){
      messages.innerHTML+=allMessages[d].msg+"&nbsp &nbsp";
      messages.innerHTML+=allMessages[d].sender+"&nbsp &nbsp";
      messages.innerHTML+=allMessages[d].recipient+"&nbsp &nbsp";
      messages.innerHTML+="<br/>";
   }
}