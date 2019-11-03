var p1 = /^[0-9]*$/; //start with number
console.log(p1.test(123));
console.log(p1.test("a123"));

var p2 = /^\d{3}$/;
var p3 = /^\d{3,}$/;
console.log(p2.test("123"));
console.log(p3.test("12343908"));
console.log(p3.test("12"));