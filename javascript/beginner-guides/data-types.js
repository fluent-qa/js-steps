const people = ["Aaron", "Mel", "John"];
const one = 1;
const str = "Hello World";
const b = true;
const person = {
  firstName: "Aaron",
  lastName: "Powell",
};

function sayHello(person) {
  console.log("Hello " + person.firstName);
}

sayHello(person)

console.log("-- typeof --");
console.log(typeof people);
console.log(typeof one);
console.log(typeof str);
console.log(typeof b);
console.log(typeof person);
console.log(typeof sayHello);
const num = new Number("1")
console.log("-- instanceof --");
console.log(people instanceof Array);
console.log(one instanceof Number); //it is false
console.log(num instanceof Number); //it is still false?
console.log(str instanceof String);
console.log(b instanceof Boolean);
console.log(person instanceof Object);
console.log(sayHello instanceof Function);
