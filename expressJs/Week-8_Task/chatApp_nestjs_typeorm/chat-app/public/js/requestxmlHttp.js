export function requestFunction(method,conv,senderAddingToMessageBox,receiverAddingToMessageBox,loader,u1,u2){
    let xhr = new XMLHttpRequest();
    if(method=='post'){
        xhr.open(method, "http://localhost:3000/chats", true);
        xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
        let senderName=conv.sender.value;
        let recipientName=conv.recipient.value;
        conv.sender=conv.sender.id;
        conv.recipient=conv.recipient.id;
        console.log('sends',JSON.stringify(conv));
        xhr.send(JSON.stringify(conv)); 
        loader.innerHTML=`<i class='fa fa-spinner fa-2x fa-spin'></i>`
        xhr.onload=function(){
               if(xhr.status==201){
                   loader.innerHTML='';
                   conv.sender=senderName;
                   conv.recipient=recipientName;
                   if(senderAddingToMessageBox!=null)senderAddingToMessageBox(conv);
                   else receiverAddingToMessageBox(conv);
               }else{
                      console.log('Error: '+xhr.status);
               }
        }
    }
    else if(method=='delete'){
       console.log(typeof(conv));
       console.log(conv);
       xhr.open(method,`http://localhost:3000/chats/${conv}`,true);
       xhr.send();
       loader.innerHTML=`<i class='fa fa-spinner fa-2x fa-spin'></i>`
       xhr.onload = function(){
              if(xhr.status==200){
                     console.log('response',xhr.response);
                     loader.innerHTML='';
                     location.reload();
              }else{
                     console.log('Error: '+xhr.status);
                 }
       }  
    }
    else{
       console.log('u1',u1);
       console.log('u2',u2);
       xhr.open('GET',`http://localhost:3000/chats/${u1}/${u2}`,true);
       xhr.send();
       loader.innerHTML=`<i class='fa fa-spinner fa-2x fa-spin'></i>`
       xhr.onload = function(){
              conv(xhr.response)
              loader.innerHTML='';
      }
    }
};

export function authFunction(method,userdata,serverError){
       let xhr = new XMLHttpRequest();
       console.log('user data',userdata);
       if(method=='post'){
        if(Object.keys(userdata).length===2){
            console.log('login.....'+userdata);
             xhr.open(method,"http://localhost:3000/auth/login",true);
             xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
             xhr.send(JSON.stringify(userdata)); 
              xhr.onload=function(){
                     console.log(xhr.responseText);
                     if(xhr.status==201){
                        serverError.innerHTML='Login Successfull <a href="/chats">Chats</a>';
                        serverError.className='serverError successful';
    
                     }else{
                         serverError.innerHTML=JSON.parse(xhr.responseText).message+' Register Yourself <a href="/auth">Register</a>';
                         serverError.className='unsuccessful';
                         let formCon =document.getElementsByClassName('form-control');
                         for(let i=0;i<formCon.length;i++){
                             if(formCon[i].className === 'form-control success'){
                                  formCon[i].className='form-control unsuccess';
                             }
                         }
                     }
              }

        }else{
              console.log('register.....'+userdata);
              xhr.open(method, "http://localhost:3000/auth/register", true);
              xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
              function replacer(key, value) {
                  // Changing phone no type to Number
                   if(key =='phone'){
                       if (typeof value === 'string') {
                             value=Number(value);
                             console.log('value',value);
                          }
                   }
                   return value
                }
              xhr.send(JSON.stringify(userdata,replacer)); 
              xhr.onload=function(){
                     console.log(xhr.responseText);
                     if(xhr.status==201){
                        serverError.innerHTML='Registration Successfull <a href="/login">Click to Login</a>';
                        serverError.className='serverError successful';
    
                     }else{
                         serverError.innerHTML=JSON.parse(xhr.responseText).message;
                         serverError.className='unsuccessful';
                         let formCon =document.getElementsByClassName('form-control');
                         for(let i=0;i<formCon.length;i++){
                             if(formCon[i].className === 'form-control success'){
                                  formCon[i].className='form-control unsuccess';
                             }
                         }
                     }
              }
        }
}}