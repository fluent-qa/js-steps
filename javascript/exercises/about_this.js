var myObject = {value:100};
myObject.getValue = function(){
    console.log(this.value); //this is myObject
    console.log(this);
    return this.value;
}
myObject.foo = function(){
    var bar = function(){
        console.log(this.value); //undefined,value is not in global
        console.log(this); //global
    }
    return bar();
}

console.log(myObject.getValue());
myObject.foo()


//apply/call write framework should learn it
var SomeClass = function(){
    this.value = 100;
}

var my = new SomeClass();
console.log(my.value);
var fooF = function(){
    console.log(this);// global function
}

fooF()
fooF.apply(my);
fooF.call(my);

var newFoor = fooF.bind(my);
newFoor();
