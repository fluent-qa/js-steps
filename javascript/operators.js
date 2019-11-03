var foo ={
    bar : "bar",
    foo1: "foo1"
};

console.log(foo.foo1);
delete foo.foo1
console.log(foo.foo1);

//void
void "hello"

var d = new Date();
console.log(d instanceof Date);
console.log(d instanceof Object);

var arr = [1,2,3,4]
console.log(d instanceof Array);
console.log(d instanceof Object);

console.log(1 &&3);
var a = 1;
console.log(1+a+++1); // error
