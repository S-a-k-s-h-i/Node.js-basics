class Student{
    public studCode:Number;
    protected studName:String;

    constructor(code:Number,name:String){
        this.studCode=code;
        this.studName=name;
    }
}
class Person extends Student{
    private department:string;

    constructor(code:Number,name:String,department:string){
        super(code,name);
        this.department=department;
    }

    display(){
        console.log(`Unique Code: ${this.studCode},Student Name: ${this.studName} and Department: ${this.department}`);
    }
}

// let student1:Student=new Student(123,"alka");
// student1.display();

let person1:Person=new Person(123,"alka","cse");
person1.display();

