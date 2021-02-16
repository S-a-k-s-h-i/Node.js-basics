var addNumber = function (x, y) {
    return x + y;
};
console.log(addNumber(3, 6));
function sum(a) {
    var b = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        b[_i - 1] = arguments[_i];
    }
    var result = a;
    for (var i = 0; i < b.length; i++) {
        result += b[i];
    }
    return result;
}
console.log(sum(3, 5));
console.log(sum(2, 5, 7, 9));
