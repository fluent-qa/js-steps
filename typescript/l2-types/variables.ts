//var,let and const

function f_demo(){
    var msg = "this is msg";
    return msg;
}
console.log(f()); //error here

function f1(){
    var a = 10;
    return function b(){
        a = a + 10;
        return a;
    }
}

var g = f1;
console.log(g());
console.log(g());

// var scoping and function-scoping
//no error for this, but caculation is wrong
//i refer to same in two different loops
//how to fix it
function sumMatrix(matrix: number[][]){
    var sum = 0;
    for(var i =0;i<matrix.length;i++){
        var curRow = matrix[i];
        for(var i=0;i<curRow.length;i++){
            sum += curRow[i];
        }
    }
    return sum;
}


//expect to print i:1,2,3,4,5
for(var i =0; i<10;i++){
    setTimeout(function(){
        console.log(i);
    },100+i);
}

//fix above error
for(var j=0;j<10;j++){
    (function(j){
        setTimeout(function(){
            console.log(j);
        },100*j)
    })(j);
};

let xy = 10;
// let xy  = 20;  //error here
var xyz = 10
var xyz = 20

function f2(condition:any,x:any){
    if(condition){
        let x = 1000
        console.log(x);
    }
    console.log(x);
    
}
f2(true,0);
f2(false,0);


for(let i =0;i<10;i++){
    setTimeout(function(){
        console.log(i);
    },200*i);
}


const kitty = {
    name    : "kitty",
    numLives: 9
}
//can't change anymore

kitty.name = "kitty changed";  //can change
console.log(kitty.name); 

//desctucting

let input          = [1,3]
let [first,second] = input
console.log(first);
console.log(second);
//swap 
[first,second] = [second,first]
console.log(first);
console.log(second);

//parameters 
function f3([first,second]:[number,number]){
    console.log(first);
    console.log(second);
}

let [first1, ...rest] = [1, 2, 3, 4];
console.log(first1); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
let [, second1, , fourth] = [1, 2, 3, 4];
//destructing an object
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
let { a, b }              = o;
let { a, ...passthrough } = o;
let total                 = passthrough.b + passthrough.c.length;

//default value
function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
}
