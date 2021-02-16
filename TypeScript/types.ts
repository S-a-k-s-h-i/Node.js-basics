export{};
(function () {
    let num : number = 12.0;
    let first: number = 12.0; 
    let empName : string = "sakshi";
    let isDone:boolean=true;
    let list:Array<number>=[1,2,3];
    let a:[string,number];
    a = ["hi", 8];
    let arrStr:string[]=["hello","world"];
    console.log('num:',num)
    console.log('first:',first);
    console.log('empName:',empName);
    console.log('isDone:',isDone)
    console.log('list:',list)
    console.log('a:',a);
    console.log(arrStr);

 })();

 function sum(first:number,second:number){
   console.log(first+second);
 }
 sum(10,20)