let arr1 = ["A", true, 2];

//Push and pop
console.log("\n********Push and pop********\n");
console.log(arr1.push("new value"));
console.log(arr1);
console.log(arr1.pop()); //Remove last value
console.log(arr1);

//Shift and unshift
console.log("\n********Shift and unshift********\n");
console.log(arr1.unshift("new value"));
console.log(arr1);
console.log(arr1.shift()); //Remove first value
console.log(arr1);

//Concat
console.log("\n********Concat********\n");
let arr2 = ["B", false, 3];
let newArr = arr1.concat(arr2);
let newArr2 = arr2.concat([1,2,3]);
console.log(newArr);
console.log(newArr2);

console.log("\n********Creating an array********\n");

let arrayLength = 5;
let array1 = [];
let array2 = Array(arrayLength);

//Getting array length
console.log("\n********Getting array length********\n");

console.log(array1.length);
console.log(array2.length);


console.log("\n********Adding data after creation********\n");
arrayLength = 2;
arr2 = Array(arrayLength);
arr2[0] = "Value at index 0";
console.log(arr2[0]);
console.log(arr2[1]); //No value present at index

//Length and index
console.log("\n********Length and index********\n");

console.log(arr1.length);
console.log(arr1[3]); //Doesn't exist
console.log(arr1[2]); //Last index of array
console.log(arr1[arr1.length - 1]); //Equals 2

console.log("\n********Length and index Part 2********\n");
let arr3 = Array(3); //Empty array of length 3
arr3[2] = "Adding a value!";
console.log(arr3[2]); //Last index of array 
console.log(arr3[arr3.length - 1]); //Index: 2
console.log(arr3[0]); //No value yet
console.log(arr3[1]); //No value yet