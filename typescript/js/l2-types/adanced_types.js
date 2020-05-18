"use strict";
// Array
let l1 = [1, 2, 3];
console.log(l1.length);
let lArray1 = [1, 2, 3];
console.log(lArray1.length);
//tuple
let x_tuple;
x_tuple = ["this", 2];
console.log(x_tuple);
console.log(x_tuple[0], x_tuple[1]);
//error 
// x_tuple[2]="hello" 
//enum
//enum
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
let cx = Color.Green;
let d = Color.RED;
let e = Color.Blue;
console.log(cx);
console.log(d);
console.log(e); // it is 3 now
// very interesting usage
console.log(Color[2]);
for (let item in Color) {
    console.log(item);
}
// Any
let notSure = 4;
console.log(notSure);
notSure = "this is testing!!";
console.log(notSure);
notSure = false;
console.log(notSure);
//think about as object or any existing type for Any
let l_any = [1, true, "false"];
l_any[1] = 100;
l_any.forEach(element => {
    console.log(element);
});
//void type, the absense of having any type at all
function warnUser() {
    console.log("this is warning user!!!");
}
warnUser();
create({ porp: 0 });
create(null);
create("test"); //error
