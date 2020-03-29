"use strict";
//boolean type
let isDone = false;
console.log(isDone);
//Numble Type
let decimal = 6;
console.log(decimal);
let hex = 6;
console.log(hex);
let binary = 6;
console.log(binary);
let octal = 6;
console.log(octal);
//string
let color = "red";
color = 'red';
let fullName = `Patrick Patrick`;
let age = 37;
let sentence = `Hello,my name is ${fullName}, and ${age + 1} years old`;
console.log(sentence);
//array
let list = [1, 2, 3];
let list1 = [1, 2, 3];
console.log(list);
console.log(list1);
//tuple
let x;
x = ["hello", 10];
// let y:[string,number] = [10,10] ; //error here
console.log(x);
console.log(x[0]);
console.log(x[1]);
console.log(x[0].substr(1));
x.push("world");
console.log(x.length);
//Any 
let notSureType = 4;
console.log(notSureType);
notSureType = 'string';
console.log(notSureType);
let anyArray = [1, "string", 9032, [1, 2, 34]];
console.log(anyArray);
console.log(anyArray[0]);
//Void
function noReturn() {
    console.log("no return value");
}
//Null nad Undefined
//Null and Underfnded 
let u = undefined;
let n = null;
console.log(u);
console.log(n);
//never
//Object
// declare function create(o:object | null): void
// create({prop:0});
//as/cast
let someValue = "String ";
let strLen = someValue.length;
let strLen1 = someValue.length;
console.log(strLen);
