var dataArray = ["test","test1"];
var a = "test"
var b = "test2"
console.log(dataArray.join("."));

console.log([a,b].join(","));

for (var key in dataArray) {
    console.log(key);
    console.log(dataArray[key]);
}