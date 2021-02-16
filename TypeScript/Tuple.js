var tup = [1, 'hello', 2, 'hii'];
console.log(tup);
tup.push(3);
console.log(tup);
tup.pop();
console.log(tup);
var f = tup[0], s = tup[1];
console.log(f);
console.log(s);
function display(t) {
    for (var i = 0; i < t.length; i++)
        console.log(t[i]);
}
display(tup);
var value;
value = 12;
console.log(value);
value = "alpha";
console.log(value);
function displayUnion(value) {
    if (typeof (value) === 'number')
        console.log('given value is of type number');
    else
        console.log('given value is of type string');
}
displayUnion(123);
displayUnion("beta");
var arrtype;
arrtype = ["welcome", 'hello'];
arrtype = [1, 2, 3, 4];
var arr;
arrtype.forEach(function (item) { arr.push(item); });
