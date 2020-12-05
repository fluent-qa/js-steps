let str1 = "Hello";
let str2 = "World!";

//Using the + operator
console.log("********Using the + operator********\n");
console.log(str1 + str2);
console.log(str1 + "Big" + str2);

console.log("\n********Adding Spacing********\n");
//Adding Spacing
str1 = "Hello ";

console.log(str1 + str2);
console.log(str1 + "Big " + str2)

console.log("\n********Be careful with numbers!********\n");
//Be careful with numbers!
let num1 = 1;
let num2 = "1";

console.log(num1 + num2);
console.log(num1 + 1);


//Concatenation with template literals
console.log("\n********Concatenation with template literals********\n");

str1 = "JavaScript";
str2 = "fun";

console.log(`I am writing code in ${str1}`);
console.log(`Formatting in ${str1} is ${str2}!`);

//Expressions in template literals
console.log("\n********Expressions in template literals********\n");

let bool1 = true;
console.log(`1 + 1 is ${1 + 1}`);
console.log(`The opposite of true is ${!bool1}`)