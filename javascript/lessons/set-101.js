const set = new Set([2,2,1]);       // Array  -> Set
const arr = [...set];               // Set    -> array

set.add(4).add(3)                   // Add element to LAST  [2,1,4,3]
set.delete(3)                       // Delete element       [2,1,4]

const entriesArr = set.entries();   // Create an iterator for loop [value, value]
entriesArr.next().value;            // [2,2]

set.has(1);                         // Check if set has 1 => TRUE
set.values();                       // return iterator object from the insert order
set.keys();                         // return iterator object from the insert order (same as values())
set.clear()                         // Clear all elements

const set = new Set([2,1,4])
const set2 = new Set([4,2,1,5])

const unionSet      = set.union(set2)          // Union 2 sets:         [2,1,4,5]
const intersectSet  = set.intersection(set2)   // Intersect 2 sets:     [2,1,4]
const diffSet       = set.difference(set2)     // Difference of 2 sets: [5]