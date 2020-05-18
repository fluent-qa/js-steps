"use strict";
//“duck typing” or “structural subtyping”
function printLabel(labelledObject) {
    console.log(labelledObject.label);
}
let myO = { size: 10, label: "size 10 object" };
printLabel(myO);
function printLabelValue(labelledObject) {
    console.log(labelledObject.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function createSquare(config) {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: "black" });
let p1 = { x: 10, y: 20 };
// p1.x                      = 5;                 // error!
let numArray = [1, 2, 3, 4];
let roObject = numArray;
let mySearch = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
};
let result = mySearch("this is main", "sub");
console.log(result);
let indexArr = ["bob", "alice"];
console.log(indexArr[0]);
let nd = { length: 10, age: 10 };
console.log(nd["length"]);
console.log(nd["age"]);
class Clock {
    constructor(hour, minute) {
        this.currentTime = new Date();
        this.currentTime.setHours(hour);
        this.currentTime.setMinutes(minute);
    }
    setTime(d) {
        this.currentTime = d;
    }
}
let cl = new Clock(10, 1);
console.log(cl.currentTime);
class DigitalClock {
    constructor(h, m) { }
    tick() {
        console.log("digital clock");
    }
}
class AnalogClock {
    constructor(h, m) { }
    tick() {
        console.log("analog clock");
    }
}
//duck typing
function makeClock(cfact, hour, minute) {
    return new cfact(hour, minute);
}
let digital = makeClock(DigitalClock, 10, 2);
let analog = makeClock(AnalogClock, 10, 2);
digital.tick();
analog.tick();
let square = {};
square.color = "red";
square.sideLength = 10;
square.penWidth = 10;
function getCounter() {
    let counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () {
        console.log("this is reset function");
    };
    return counter;
}
let cnt = getCounter();
cnt(10);
cnt.reset();
cnt.interval = 10;
console.log(cnt);
//interface extending class
class Control {
}
class Button extends Control {
    selecct() {
        console.log("this is select control!!");
    }
}
let btn = new Button();
console.log(btn);
//class modifier:
// private/public/protected/readonly/static
//get/set
//abstract class:abstract method
