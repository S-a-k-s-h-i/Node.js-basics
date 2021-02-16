var Student = /** @class */ (function () {
    function Student(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    Student.prototype.getFirstName = function () {
        console.log('First Name: ', this.firstName);
    };
    Student.prototype.getLastName = function () {
        console.log('Last Name: ', this.lastName);
    };
    Student.prototype.getFullName = function () {
        console.log("Full Name: " + this.firstName + ' ' + this.lastName);
    };
    return Student;
}());
var student1 = new Student("akash", "verma");
student1.getFirstName();
student1.getLastName();
student1.getFullName();
