var emptyArray = [];
var primes = [2, 3, 5, 6, 11];
var misc = [1, true, 1.1, "a"];
var twoDimension = [[1, {x: 1, y: 2}], [2, {x: 3, y: 4}]];

//new
var nums = new Array();
console.log(nums.length)
var numsWithLength = new Array(10);
console.log(numsWithLength.length);
numsWithLength[1000] = 1001;

console.log(numsWithLength.length);

nums[-1.234] = 10;
console.log(nums.length);
console.log(nums[-1.234]);
console.log(nums["-1.234"]); //it is a properties
nums[1] = 10;
for (var obj in nums) { //index and properties
    console.log(typeof obj);
    console.log("this is nums property " + obj);
    console.log(nums.propertyIsEnumerable(obj));
    console.log(nums.hasOwnProperty(obj));
}
console.log(nums);
console.log(nums[0]); //this is undefined not 0

nums.forEach( //only for array type,without properties
    function (x) {
        console.log(x);
    }
);

//valueOf(),toString(),toLocaleString()
console.log(nums.valueOf());
console.log(nums.toString());
console.log(nums.toLocaleString());
console.log(nums.join(":"));

//as a stack
nums.push(100); // add to last one
nums.shift(); //first one
nums.pop(); //last one
nums.push(1);
nums.push(3);
nums.push(4);
console.log(nums);
//binary function
nums.sort(function compare(v1, v2) {
    return v1 < v2 ? -1 : 1;
});


console.log(nums);
console.log(nums.concat())
console.log(nums.slice(1, 3));

/**
 * every()
 * map()
 * filter()
 * forEarch()
 * some()
 */

var result = nums.every(function (value, index, array) {
    return (value > 2);
});
console.log(result);

var someResult = nums.some(function (value, index, array) {
    return value > 2;
});
console.log(someResult);

console.log(nums.filter(function (value) {
    return value > 2;
}));

console.log(nums.map(function (value) {
    return value * 2;
}));

var sum = nums.reduce(function (previousValue, currentValue, currentIndex) {
    console.log(currentValue);
    console.log(previousValue);
    return previousValue + currentValue;
});
console.log(sum);

var sumRight = nums.reduceRight(function (previousValue, currentValue) {
    console.log(currentValue);
    console.log(previousValue);
    return previousValue + currentValue;
});
console.log(sumRight);

//chain usage

var chainResult = nums.map(function (value) {
    return value * 2;
}).reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});

console.log("nums is :" + nums);
console.log("after chain call, the result is " + chainResult);


//find unique nums in an array

var arr = [2, 3, 4, 5, 21, 12, 2, 3, 4, 6, 7];

var unique = function (sourceArr) {
    var result = [];
    arr.forEach(function (item) {
        if (result.indexOf(item) < 0) {
            result.push(item);
        }
    });
    return result;
};
console.log(unique(arr).sort());

var arr_nested = [[2, 3, 4], [1, 2, 3, 45], 1, 2, 67];
console.log(arr_nested.length);
var result = [];

function flatArray(targetArr) {
    targetArr.forEach(function (value) {
        if (Array.isArray(value)) {
            flatArray(value);
        } else {
            if (result.indexOf(value) < 0) { //doing unique

                result.push(value);
            }
        }
    });
    return result;
};
console.log("after flat:" + flatArray(arr_nested).length);
console.log(result);