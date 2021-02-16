let student=new Map<number,string>();
student.set(1,"ajay");
student.set(2,'babita');
student.set(3,'sagar');
student.set(4,'koyal');

console.log(student.get(2));
console.log(student.keys());
for(let key in student)
console.log(key);
for(let value in student)
console.log(value);

for(let [key,value] of student)
console.log(key,value);