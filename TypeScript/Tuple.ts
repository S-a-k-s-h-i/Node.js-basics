let tup=[1,'hello',2,'hii'];
console.log(tup);
tup.push(3);
console.log(tup);
tup.pop();
console.log(tup);
let [f,s]=tup;
console.log(f);
console.log(s);

function display(t:any[]){
    for(let i=0;i<t.length;i++)
       console.log(t[i]);
}

display(tup)

let value:Number|string;
value=12;
console.log(value);
value="alpha";
console.log(value);

function displayUnion(value:(Number|String)){
    if(typeof(value)==='number')
    console.log('given value is of type number');
    else
    console.log('given value is of type string');
 }
 
 
 displayUnion(123);
 displayUnion("beta");

 let arrtype:number[]|string[];
 arrtype=["welcome",'hello'];
 arrtype=[1,2,3,4]

 let arr:number[];
 arrtype.forEach(function(item){arr.push(item);})
