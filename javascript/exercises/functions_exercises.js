function sayHello(name) {
    console.log("Hell " + name);
}

function sum(a, b) {
    return a + b
}

function helloWorld() {
    console.log("Hello World!");

}

sayHello("simon");

//function properties
console.log("function sayHello length:", sayHello.length);
console.log("function sum length:", sum.length);
console.log("function sum length:", helloWorld.length);

//define a function:
var definedF = new Function("a", "b", "return a+b");
console.log(definedF(3, 4));

//pass function

function callFunction(someFunction, args1, arg2) {
    return someFunction(args1, arg2);
}

var result = callFunction(sum, 1, 2);
console.log(result);

function createComparisonFunction(propertyName) {
    return function (obj1, obj2) {
        var v1 = obj1[propertyName];
        var v2 = obj2[propertyName];
        if (v1 < v2) {
            return -1;
        } else if (v1 > v2) {
            return 1;
        } else {
            return 0;
        }
    }
}

var data = [{name: "Zachary", age: 90}, {name: "Nicholas", age: 29}];
data.sort(createComparisonFunction("age"));
console.log(data);

//arguments,this,callee

function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        console.log(arguments);
        return num * arguments.callee(num - 1)
    }
}

var firstFactorial = function () {
    return 0;
}

console.log(factorial(4));
console.log(firstFactorial());

//caller/callee
function outer() {
    inner();
}

function inner() {
    console.log(arguments);
    console.log(arguments.callee);
    console.log(arguments.callee.caller);
}

outer();

//apply,call

function callSum(num1, num2) {
    return sum.apply(this, arguments);
}

function callSum2(num1, num2) {
    return sum.apply(this, [num1, num2]);
}

console.log(callSum(1, 2));
console.log(callSum2(2, 2));

//todo this scope? seems very tricky

var b = {color: 'red'};
var o = {color: 'blue'}

function whatColor() {
    console.log(this.color);
}

whatColor();
whatColor(this);
whatColor(b);
whatColor(o);

//concat any arguments
var concat = function(){
    var result = '';
    for(var i =0 ;i<arguments.length;i++){
        result +=arguments[i];
    }
    return result;
}


console.log(concat("this"," is"," test"," concat"));

//understand arguments

var test = function(count){
    var testFunc= function(n){
        console.log("first "+n);
        if(n<=1){
            return 1;
        }else{
            console.log(arguments.callee); // callee/caller
            return arguments.callee(n-1)+arguments.callee(n-2);
        }
    };
    return testFunc(--count);
}

console.log(test(4));