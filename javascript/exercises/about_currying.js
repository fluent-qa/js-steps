
function pow(x,y){
    return Math.pow(x,y);
}

//very interesting for curry function

function curry(f){
    var rightVars = Array.prototype.slice.call(arguments,1);
    console.log(arguments[0]);
    console.log("right vars are:"+rightVars);
    return function(){
        Array.prototype.push.apply(arguments,rightVars);
        return f.apply(this,arguments);
    }
}

var squre = curry(pow,2);
var cube  = curry(pow,3);

console.log(curry(pow)(1));
console.log(squre(4));
console.log(cube(4));