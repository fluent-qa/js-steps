const obj = {
    "firstName": "Calvin",
    "age": 23,
    "numList": [1,2,3]
};

// access the value
const { firstName, age, numList } = obj;  // Get the key-value: firstName = "Calvin", age = 23, numList = [1,2,3]
obj.newNumList = [...numList, 4];         // Add new key - value: [1,2,3,4]
delete obj.numList                        // Remove the key-value: { "firstName": "Calvin", "age": 23, "newNumList": [1,2,3,4] };



// &	    AND 	                5 & 1 (0101 & 0001)	1 (1)
// |	    OR 	                    5 | 1 (0101 | 0001)	5 (101)
// ~	    NOT 	                ~ 5 (~0101)	10 (1010)
// ^	    XOR 	                5 ^ 1 (0101 ^ 0001)	4 (100)
// <<	  left shift 	            5 << 1 (0101 << 1)	10 (1010)
// >>	  right shift 	            5 >> 1 (0101 >> 1)	2 (10)
// >>>	  zero fill right shift 	5 >>> 1 (0101 >>> 1)	2 (10)


var pi = 3.141;
pi.toFixed(0);            // returns 3
pi.toFixed(2);            // returns 3.14 - for working with money
pi.toPrecision(2)         // returns 3.1
pi.valueOf();             // returns number

Number(true);             // converts to number
Number(new Date())        // number of milliseconds since 1970
parseInt("3 months");     // returns the first number: 3
parseFloat("3.5 days");   // returns 3.5

Number.MAX_VALUE          // largest possible JS number
Number.MIN_VALUE          // smallest possible JS number
Number.NEGATIVE_INFINITY  // -Infinity
Number.POSITIVE_INFINITY  // Infinity