const map = new Map([[1 , 2], [2 , 3] ,[4, 5]]);

map.set(6,7);         // Add new key-value      => { 1 => 2, 2 => 3, 4 => 5, 6 => 7 }
map.has(3);           // Check if key 3 exist   => FALSE
map.get(1);           // get value of key 1     => 2
map.delete(1);        // delete key-value of 1  => { 2 => 3, 4 => 5, 6 => 7 }
map.length           // get the size of a map  => 3
map.keys();      // get the list of keys   => [2,4,6]
map.forEach((val, key) => console.log({key, val}));
// {key: 2, val: 3}
// {key: 4, val: 5}
// {key: 6, val: 7}
console.log([map.keys()]);