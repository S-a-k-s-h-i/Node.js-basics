export function requestFunction(method,conv,senderAddingToMessageBox,receiverAddingToMessageBox,loader,u1,u2){
    let xhr = new XMLHttpRequest();
    if(method=='post'){
       xhr.open(method, "http://localhost:3000/chats", true);
       xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
       console.log('sends',JSON.stringify(conv));
       xhr.send(JSON.stringify(conv)); 
       loader.innerHTML=`<i class='fa fa-spinner fa-2x fa-spin'></i>`
       xhr.onload=function(){
              if(xhr.status==201){
                  loader.innerHTML='';
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
       xhr.open('GET',`http://localhost:3000/chats/${u1}/${u2}`,true);
       xhr.send();
       loader.innerHTML=`<i class='fa fa-spinner fa-2x fa-spin'></i>`
       xhr.onload = function(){
              conv(xhr.response)
              loader.innerHTML='';
      }
    }
};