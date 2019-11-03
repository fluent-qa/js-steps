function makePowerFn(power) {
    return function (base) {
        return Math.pow(base, power);
    }
}

console.log(makePowerFn(3));
console.log(makePowerFn(3)(4));
console.log(makePowerFn(4)(3));

function makeIncrease(){
    var n = 0 ;
    return function(){
        n = n+1;
        return n;
    }
}
var num = 0 ;
function makeIncreaseG(){
    return function(){
        return ++num;
    }
}

var counter1 = makeIncrease();
var counter2 = makeIncrease();

console.log(counter1()); //1
console.log(counter2()); //1

console.log(makeIncreaseG()());//1
console.log(makeIncreaseG()());//2