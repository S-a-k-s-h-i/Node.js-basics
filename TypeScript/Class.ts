class Student{
    firstName:String;
    lastName:String;
    private age:Number;
    
    constructor(firstName:String,lastName:String,age?:Number){
         this.firstName=firstName;
         this.lastName=lastName;
         this.age=age;
    }

    getFirstName(){
         console.log('First Name: ',this.firstName);
    }
    getLastName(){
        console.log('Last Name: ',this.lastName);      
    }
    getFullName(){
        console.log("Full Name: "+this.firstName+' '+this.lastName);
    }
}
let student1=new Student("akash","verma",11);
// student1.age=12;
student1.getFirstName();
student1.getLastName();
student1.getFullName();