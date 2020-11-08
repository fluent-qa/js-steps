const arr = [1];
arr.concat([4, 5, 6]);                      // Merge 2 arrays:                      [1,4,5,6]
console.log(arr)
arr.push(7);                              // Add element to LAST:                 [1,4,5,6,7]
console.log(arr)
arr.unshift(0);                           // Add element to FIRST:                [0,1,4,5,6,7]
console.log(arr)
arr.splice(2, 0, 2);                      // Add element BEFORE index 2:          [0,1,2,4,5,6,7]
arr.splice(2 + 1, 0, 3);                  // Add element AFTER index 2:           [0,1,2,3,4,5,6,7]

arr.shift();                              // Remove FIRST Element                 [1,2,3,4,5,6,7]
arr.pop();                                // Remove LAST Element                  [1,2,3,4,5,6]
arr.reverse();                            // Reverse                              [6,5,4,3,2,1]
arr.sort();                               // Sort                                 [1,2,3,4,5,6]  

arr.splice(arr.indexOf(3), 0, 33)      // Add element BEFORE a specific index  [_,_,REF,NEW,_,_]
arr.splice(arr.indexOf(3) + 1, 0, 33)  // Add element AFTER a specific index   [_,_,REF,NEW,_,_]
arr.splice(2, 1, '_');                    // Replace element at index 2:          [1,_,3,4,5,6]

// get the Sub Set
function subArrsy() {
    const arr = [0, 1, 2, 3, 4, 5]
    arr.slice(0);               // [0,1,2,3,4,5]
    arr.slice(0, 1);             // [0          ]
    arr.slice(1);               // [  1,2,3,4,5]
    arr.slice(1, 2);             // [  1        ] 
    arr.slice(2, 4);             // [    2,3    ]
    arr.slice(4);               // [        4,5]
    arr.slice(5);               // [          5]
    console.log(arr)
    const newArr = arr.slice(); // clone the array
    console.log(newArr)
}

subArrsy()