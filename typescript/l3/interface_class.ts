//“duck typing” or “structural subtyping”
function printLabel(labelledObject: { label: string }) {
    console.log(labelledObject.label);
}

let myO = { size: 10, label: "size 10 object" }
printLabel(myO);

//define interface

interface LabelledValue {
    label: string
}

function printLabelValue(labelledObject: LabelledValue) {
    console.log(labelledObject.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

//optional properties

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
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


//readonly properties
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x                      = 5;                 // error!
let numArray: number[]              = [1, 2, 3, 4];
let roObject: ReadonlyArray<number> = numArray;
// ro [0]                        = 12;                // error!
// ro.push(5); // error
// ro.length = 100;  // error!
// a         = ro;   // error!

interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}

let result = mySearch("this is main", "sub");
console.log(result);

//indexable Types
interface StringArray {
    [index: number]: string
}

let indexArr: StringArray = ["bob", "alice"];
console.log(indexArr[0]);

//string index
interface NumberDict {
    [index: string]: number;
    length         : number;
    age            : number
}

let nd: NumberDict = { length: 10, age: 10 }
console.log(nd["length"]);
console.log(nd["age"]);

//class type: implementing an interface
interface ClockInterface1{
    
}

class Clock implements ClockInterface1 {
    setTime(d: Date) {
        this.currentTime = d;
    }
    currentTime: Date;
    constructor(hour: number, minute: number) {
        this.currentTime = new Date();
        this.currentTime.setHours(hour);
        this.currentTime.setMinutes(minute);
    }
}

let cl: Clock = new Clock(10, 1);
console.log(cl.currentTime);

interface ClockFactory {
    new(hour: number, minute: number): ClockInterface;
}

interface ClockInterface {
    tick(): void;
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("digital clock");
    }
}

class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick(): void {
        console.log("analog clock");
    }
}
//duck typing
function makeClock(cfact: ClockFactory, hour: number, minute: number) {
    return new cfact(hour, minute);
}

let digital = makeClock(DigitalClock, 10, 2);
let analog  = makeClock(AnalogClock, 10, 2);
digital.tick();
analog.tick();

//extending interface

interface Shape {
    color: string
}
interface PenStoke {
    penWidth: number;
}
interface Square extends Shape, PenStoke {
    sideLength: number;
}

let square            = <Square>{};
    square.color      = "red";
    square.sideLength = 10;
    square.penWidth   = 10;

interface Counter {
                                                                      (start: number): string
                                                                      interval       : number;
                                                                reset()              : void;
}

function getCounter(): Counter {
    let counter          = <Counter>function (start: number) { }
        counter.interval = 123;
        counter.reset    = function () {
        console.log("this is reset function");
    }
    return counter;
}

let cnt = getCounter();
cnt(10);
cnt.reset();
cnt.interval = 10;
console.log(cnt);

//interface extending class

class Control{
    private state: any;
}

interface SelectableContol extends Control{
    selecct(): void;
}

class Button extends Control implements SelectableContol{
    selecct(): void {
        console.log("this is select control!!");
    }
}

let btn = new Button();
console.log(btn);

//class modifier:
// private/public/protected/readonly/static
//get/set
//abstract class:abstract method
