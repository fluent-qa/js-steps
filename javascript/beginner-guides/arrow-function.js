const add = (a, b) => a + b;
console.log(add(1, 2));

const subtract = (a, b) => {
  const result = a - b;
  return result;
};
console.log(subtract(1, 1));


const addFunction = function (a, b){
    return a+b;
}

const subtractFunc = function(a,b){
    return a-b;
}

console.log(addFunction(1,2))
console.log(subtractFunc(12,2))