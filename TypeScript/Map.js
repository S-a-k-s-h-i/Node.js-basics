var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var e_1, _a;
var student = new Map();
student.set(1, "ajay");
student.set(2, 'babita');
student.set(3, 'sagar');
student.set(4, 'koyal');
console.log(student.get(2));
console.log(student.keys());
for (var key in student)
    console.log(key);
for (var value in student)
    console.log(value);
try {
    for (var student_1 = __values(student), student_1_1 = student_1.next(); !student_1_1.done; student_1_1 = student_1.next()) {
        var _b = __read(student_1_1.value, 2), key = _b[0], value = _b[1];
        console.log(key, value);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (student_1_1 && !student_1_1.done && (_a = student_1["return"])) _a.call(student_1);
    }
    finally { if (e_1) throw e_1.error; }
}
