var parent = function(){
                                                                                                    lastname = "last";
                                                                                                var name     = "parent_name";
                                                                                                var age      = 30;
                                                                                                var child    = function(){
        var name = "child";
        var age1 = 1;
        console.log(name,age,age1,lastname); //name scope is in child,age is parent
    }
    child()
    console.log(name,age,lastname); //name scope is in parent
    console.log(global.lastname); //lastname is global
}

parent()

//how about this:

function foo(){
    value = 'foo'
}
foo();
console.log(value); //it is global without var
console.log(global.value); //node all global in global and browser in window

//how about in for loop
function forLoopScope(){
    for(var i=0;i<10;i++){
        var value = "hello world";
    }
    console.log(i,value);
}
forLoopScope();

//闭包

var adder = function(x){
    var base = x;
    return function(n){
        return n+base;
    }
};
console.log(adder(1)(3)) //should be 4
//variable could be function
var add9 = adder(9);
console.log(add9(10));//19

function localValInClosure(){
    var num      = 1;
    var printNum = function(){
        console.log(num);
    }
    num++;
    return printNum;
}

localValInClosure()() //2.local variable ended up at the closure function called

// 5 not 0 1 2 3 4
for(var i =0;i<5;i++){
    setTimeout(function(){
        console.log(i); // only i reference, when fetch the value, the value of i is 5
    },5);
}

//then how to fix it
for(var i =0;i<5;i++){
    (function(idx){
        setTimeout(function(){
            console.log(idx);
        },5);
    })(i);
}
