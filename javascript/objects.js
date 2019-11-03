// 'use strict'

var person = {
    name: "person",
    age : 20
};
console.log(person)
var personAtt      = {}
    personAtt.name = "person";
    personAtt.age  = 20

console.log(personAtt);
console.log(person==personAtt)
console.log(person===personAtt)

var anotherP      = new Object();
    anotherP.name = "person"
    anotherP.age  = 20;
console.log(anotherP);

var person1      = Object.create(Object.prototype);
    person1.name = "person";
    person1.age  = 28;
console.log(person1);

//prototype/prototype chain

//create object
//get object property
//set object property
//delete object property
var o = {x:1};
console.log("x" in o); 
console.log("y" in o);
console.log("toString" in o); 

//hasOwnProperty()

var oX = {x:1};
console.log(o.hasOwnProperty("x"));
console.log(o.hasOwnProperty("Y"));
console.log(o.hasOwnProperty("toString")); //toString is not own properties
console.log(Object.prototype.hasOwnProperty("toString"));
console.log(Object.hasOwnProperty("toString"));

var o   = {y:1}
    o.x = 1;
o.propertyIsEnumerable("x");    // true:，x是o的自有属性，可枚举
o.propertyIsEnumerable("y");    // false，y是继承属性
Object.prototype.propertyIsEnumerable("toString");  // false，不可枚举

//copy or extend a object to another object
function copyOrExtend(source,target){
    for (const prop in source) {
       target[prop] = source[prop]
    }
}