"use strict";
exports.__esModule = true;
var fullName = function (namepro) {
    console.log(namepro.firstname + " " + namepro.secondName);
};
fullName({
    firstname: "sakshi",
    secondName: "pokhria"
});
var empObject = {};
empObject.name = "kiran";
empObject.age = 23;
empObject.gender = "female";
empObject.empcode = "123SW";
console.log("employee name: ", empObject.name);
console.log("employee code: ", empObject.empcode);
var Student = /** @class */ (function () {
    function Student(fN, lN, age) {
        this.firstName = fN;
        this.lastName = lN;
        this.age = age;
    }
    Student.prototype.fullName = function () {
        console.log(this.firstName + ' ' + this.lastName);
    };
    Student.prototype.getAge = function () {
        console.log(this.age);
    };
    return Student;
}());
var student1 = new Student("alka", "singh");
student1.fullName();
