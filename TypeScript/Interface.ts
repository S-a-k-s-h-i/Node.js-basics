export{}
interface Namepro{
    firstname:string,secondName:string
}

let fullName= (namepro:Namepro) => {
    console.log(namepro.firstname+" "+namepro.secondName);
}
fullName({
    firstname:"sakshi",
    secondName:"pokhria"
    });

interface Person{
    name:string,
    age:number
}
interface Employee extends Person{
    gender:string,
    empcode:string
}

let empObject=<Employee>{}
empObject.name="kiran";
empObject.age=23;
empObject.gender="female";
empObject.empcode="123SW";
console.log("employee name: ",empObject.name);
console.log("employee code: ",empObject.empcode);

interface Women{
    firstName:string;
    lastName:string;
    age:number;
    fullName();
    getAge();
}
class Student implements Women{
    firstName:string;
    lastName:string;
    age:number;
    constructor(fN:string,lN:string,age?:number){
          this.firstName=fN;
          this.lastName=lN;
          this.age=age;
    }
    fullName(){
        console.log(this.firstName+' '+this.lastName)
    }
    getAge(){
        console.log(this.age)
    }
}
let student1=new Student("alka","singh");
student1.fullName();