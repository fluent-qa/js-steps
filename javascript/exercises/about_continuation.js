var value = 10;
var doubleIt= function(x){
    value = 2*value;
}
var squareIt= function(x){
    value = value*value;
}

function execute(f1,f2){
    f2();
    f1();
}


execute(doubleIt,squareIt);

console.log(value);//200

var doubleX= function(x){
    return 2*x;
}

var squareX = function(x){
    return x*x;
}

function continuation(fn, arg, fnNext){
    return fnNext(fn(arg));
}

  
var valueX = continuation(doubleX,10,squareX);
console.log(valueX);