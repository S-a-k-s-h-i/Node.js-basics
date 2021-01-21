let output=document.getElementById('output-value');
buttons=document.querySelectorAll('button');
let history=document.getElementById('history-value');
let calculate=[];
let norepeatofOperator=[];
for(bt of buttons){
    bt.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        history.innerHTML+=buttonText;
        if(buttonText=='C'){
            output.innerHTML='';
            history.innerHTML='';
            calculate=[]
        }else if(buttonText=='='){
            output.innerHTML=calci();
            history.innerHTML=calculate[0];

        }else{
            calculate.push(buttonText);
            for(let v=0;v<calculate.length-1;v++){
                if(!isNaN(calculate[v]) && !isNaN(calculate[v+1])){
                    calculate[v]=calculate[v]+calculate[v+1];
                    calculate.pop(calculate[v+1]);
                }
                    if(calculate[v]==calculate[v+1] && ['+','-','x','/','%'].includes(calculate[v])){
                    calculate.pop(calculate[v+1]);
                    temp=history.innerHTML;
                    history.innerHTML=temp.substring(0,temp.length-1);
                }
            }
            output.innerHTML=buttonText;
            console.log('1',calculate);
            
        }
    })

}

function calci(){
    if(calculate.length==3){
        let result;
        [a, operatorString, b] = calculate;
        a=parseInt(a);
        b=parseInt(b);
        switch(operatorString) { 
                case '+': 
                      result=a+b;
                      break; 
                case '-': 
                      result=a-b; 
                      break;
                case 'x': 
                      result=a*b; 
                      break;
                case '/':
                      result=a/b; 
                      break;
                case '%':
                      result=a%b; 
            
        } 
        while(calculate.length > 0) {
            calculate.pop();
        }
        calculate.push(result);   
    }
    return calculate[0];
}