let addNumber=(x:number,y:number):number => {
    return x+y
}
console.log(addNumber(3,6));

function sum(a:number,...b:number[]):number{
    let result=a;
    for(let i=0;i<b.length;i++){
    result+=b[i];
    }
    return result
}
console.log(sum(3,5));
console.log(sum(2,5,7,9));