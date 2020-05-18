let message = "Helo World!";
console.log(message);


//variable declaration
let x = 10;
const y = 10;
console.log(x, y)

let sum;
const title = "title";

let isBenginner: boolean = true;
let total: number = 100.023
console.log(total)

let nameStr: string = "name"
console.log(nameStr)

let strComposition = `this is ${nameStr}`;
console.log(strComposition)

//null and undefined
let n: null = null;
let und: undefined = undefined
console.log(n, und);
//Arry type
// let list1: number[]=[1,2,3,456];
// console.log(list1)
// let anyList: Array<number>[] = [12, 3, 4, 534, 5]

// console.log(anyList)
//Symbol type
// var testKey = Symbol();
// var obj={}
// obj[testKey]="test key";
// obj[Symbol.toStringTag()] ="test key2"
// console.log(obj)
//Any type
const enum Operator {
    ADD,
    DIV,
    MUL,
    SUB
}

console.log(Operator.ADD)
console.log(Operator.DIV)

/**
 * Object type:
 * Array/Tuple/Function/COnstructor
 */

interface MyArray<T> {
    length: number;
    [x: number]: T
}

var a: string[] = ["test", "new", "year"]
console.log(a)
console.log("tuple", [12, 234, "test"])
var t:[number,string] = [123,"0123"]
console.log(t)