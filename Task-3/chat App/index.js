let allMessages=[];
let u1,u2;
let messages=document.getElementById("messages");
let textbox1=document.getElementById("textbox1");
let textbox2=document.getElementById("textbox2");
let button1=document.getElementById("button1");
let button2=document.getElementById("button2");
let user1=document.getElementById("user1");
let user2=document.getElementById("user2");
let chats=document.getElementById("chats");
button1.addEventListener('click',function(){
   allMessages.push(textbox1.value);
   u1=user1.options[user1.selectedIndex].text;
   console.log(allMessages);
   console.log('u1',u1);
   textbox1.value="";
})
button2.addEventListener('click',function(){
    allMessages.push(textbox2.value);
    u2=user2.options[user2.selectedIndex].text;
    console.log(allMessages);
    console.log('u2',u2);
    textbox2.value="";
   })

chats.addEventListener('click',function(){
   for(let m=1;m<=allMessages.length;m++){
         if(m%2!=0){
             var user1Message=document.createElement("div");
             user1Message.classList.add("msg1");
             user1Message.innerHTML=allMessages[m];
             let span=document.createElement('span');
             span.classList.add("sender");
             let sender=document.createTextNode(u1);
             span.appendChild(sender);
             user1Message.appendChild(span);
             messages.appendChild(user1Message);
       }else{
        var user2Message=document.createElement("div");
        user2Message.classList.add("msg2");
        user2Message.innerHTML=allMessages[m];
        span=document.createElement('span');
        span.classList.add("sender");
        sender=document.createTextNode(u2);
        span.appendChild(sender);
        user2Message.appendChild(span);
        messages.appendChild(user2Message)
       }
   }
   allMessages=[];
}
)


  ;

