// todo: write a docs about js object
//shared by all object instances
Object.prototype.print = function () {
    console.log("prototype print")
}

Object.print = function () {
    console.log("this is defined print function");
}

var obj = Object()
obj.print()

print()

var nullObj = Object(null)
nullObj.print()
console.log(typeof (nullObj))
var undObj = Object(undefined)
undObj.print()

console.log(Object(1) instanceof Object)
console.log(Object(1) instanceof Number)

function isObject(value) {
    return value === Object(value);
}

isObject([]) // true
isObject(true) // false
var o1 = { a: 1 };
var o2 = new Object(o1);
o1 === o2 // true

var obj = new Object(123);
obj instanceof Number // true

var objWKeys = {
    p1:123,
    p2:234
}

console.log(Object.keys(objWKeys))
ownProps = Object.getOwnPropertyNames(objWKeys)
console.log(ownProps)

var a = ['Hello', 'World'];

console.log(Object.keys(a))// ["0", "1"]
console.log(Object.getOwnPropertyNames(a))// ["0", "1", "length"]