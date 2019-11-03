// 'use strict'

// Hello world
console.log("Hello World!");

//literal values

// "Hello World"   //string
// 123  // int
// 1.2 
// true
// false
// /javascript/g1 // reg expression
// null //null
// [1,2,3,4,5,6] ; //list

// {
//         name: 'name',
//         age : '20'
// }; //object/map
// //function
// function hello(){
//     console.log('Hello')
// }

var name = "Person";
console.log(name);

var Name = "Name";
console.log(Name);

console.log(true,false);

var $_$ = "stone";
console.log($_$);

var Array = 'array';
console.log(Array)
var underfined = 'null'
console.log(undefined)

var result = 1+1
console.log(result);

console.log(typeof(0/0))// number

console.log(0.1+0.6===0.7);
console.log(0.1+0.7===0.8); //why??
console.log(NaN===NaN);

console.log("\right\now");          // ight
                                    // ow
console.log("\right\now".length);   // 8
console.log(010.toString(2));       // "1000"

var person ={
    name  : "name",
    age   : 38,
    weight: 76,
    pets  : [{
        name: "dog",
        type: 'dog'
    },
    {
        name: "cat",
        type: 'cat'
    }]
}

console.log(person);
console.log(person.name)
console.log(person.pets[0].name)
console.log(person.pets[1].type)

//scopt

var message = "global"
function testMsg(){
    var message = "test"
    console.log(message);
}

console.log(message);