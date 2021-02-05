export function requestFunction(method,conv,senderAddingToMessageBox,receiverAddingToMessageBox,loader,callback){
    let xhr = new XMLHttpRequest();
    if(method=='post'){
       xhr.open(method, "/messages", true);
       xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
       xhr.send(JSON.stringify(conv)); 
       loader.innerHTML=`<i class='fa fa-spinner fa-2x fa-spin'></i>`
       xhr.onload=function(){
              if(xhr.status==200){
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
       xhr.open(method,`http://localhost:3000/messages/${conv}`,true);
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
       xhr.open('GET','http://localhost:3000/messages',true);
       xhr.send();
       loader.innerHTML=`<i class='fa fa-spinner fa-2x fa-spin'></i>`
       xhr.onload = function(){
              conv(xhr.response)
              loader.innerHTML='';
      }
    }
};
