var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = /** @class */ (function () {
    function Student(code, name) {
        this.studCode = code;
        this.studName = name;
    }
    return Student;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(code, name, department) {
        var _this = _super.call(this, code, name) || this;
        _this.department = department;
        return _this;
    }
    Person.prototype.display = function () {
        console.log("Unique Code: " + this.studCode + ",Student Name: " + this.studName + " and Department: " + this.department);
    };
    return Person;
}(Student));
// let student1:Student=new Student(123,"alka");
// student1.display();
var person1 = new Person(123, "alka", "cse");
person1.display();
