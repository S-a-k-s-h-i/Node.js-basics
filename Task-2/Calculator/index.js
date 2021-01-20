let output=document.getElementById('output-value');
buttons=document.querySelectorAll('button');
let history=document.getElementById('history-value');
let calculate=[]
for(bt of buttons){
    bt.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        history.innerHTML+=buttonText;
        if(buttonText=='C'){
            output.innerHTML='';
            history.innerHTML='';
            calculate=[]
        }else if(buttonText=='='){
            output.innerHTML=calculate[0];
            history.innerHTML=calculate[0];

        }else{
            calculate.push(buttonText);
            output.innerHTML=buttonText;
            console.log('1',calculate);
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
        }
    })

}