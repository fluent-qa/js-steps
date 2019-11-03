
console.log(typeof(null));
console.log(typeof(124));
console.log(typeof("this is string"));
console.log(typeof(12.3));
console.log(typeof(0.1));

console.log(typeof({
    name: 'name',
    age : 20
}));

console.log(typeof(0/0))// number

// //undefined
// console.log(notDefined)
// console.log(typeof(notDefined));

//Null
//Boolean

function judgeIt(msg){
    if(msg){
        console.log("Has value");
    }
    return Boolean(msg);
}

console.log(judgeIt("msg"))
console.log(judgeIt(null));

//Number
var a = 10;      // 十进制
var b = 023;     // 八进制
var c = 0x12ac;  // 十六进制
console.log(b);     // 19
console.log(c);     // 4780
var a = 3.14e7;   // 等于31400000
var b = 3.14E-7;  // 等于0.000000314
console.log(0.0000003);     // 3e-7
console.log(Number.MAX_VALUE);       // 最大数 1.7976931348623157e+308
console.log(Number.MIN_VALUE);       // 最小数 5e-324

console.log(Number.POSITIVE_INFINITY);    // 正无穷  Infinity
console.log(Number.NEGATIVE_INFINITY);    // 负无穷 -Infinity

console.log( 1 / 0);     //  Infinity
console.log(-1 / 0);     // -Infinity
console.log(isFinite(100));         // true
console.log(isFinite(Infinity));    // false 

//NaN
console.log(typeof NaN);      // "number"

console.log(0 / 0);                 // NaN
console.log(NaN - NaN);             // NaN
console.log(Infinity - Infinity);   // NaN

var a = NaN;
console.log(a === a);   // false

console.log(parseInt(""));          // NaN（Number("")返回 0）
console.log(parseInt("123S"));      // 123
console.log(parseInt("12.4"));      // 12

console.log(parseFloat("098.2"));       // 98.2
console.log(parseFloat("123.23.23"));   // 123.23

//string
console.log(true.toString());   // "true"

var foo = "bar";
console.log(typeof foo)
console.log("\n\\".length);    // 2
console.log("\\hello");        // "\hello"（长度为6）
var num = 10;
console.log(num.toString());    // "10"
console.log(num.toString(2));   // "1010"
console.log(num.toString(8));   // "12"
console.log(num.toString(16));  // "a"

var value;
console.log(String(10));        // "10"
console.log(String(true));      // "true"
console.log(String(null));      // "null"
console.log(String(value));     // "undefined"

//object
var obj = {
    name   : "Carrot",
    "for"  : "Max",
    details: {
        color: "orange",
        size : 12
    }
}

console.log(obj.for)
console.log(obj.details.color)
console.log(obj['details']['size'])


