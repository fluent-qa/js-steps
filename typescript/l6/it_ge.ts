//Symbol.iterator
// build in :
// Array,Map,Set,String,Int32Array,Uint32Array

let someArray = [1,"string",false]
for (const entry of someArray) {
    console.log(entry);
}

for (const key in someArray){
    console.log(someArray[key]);
}

let pets = new Set(["Cat","Dog","Hamster"]);  //why error
// pets["species"] = "mammals";
pets.add("species")
for(let pet in pets){
    console.log(pet);
}
for(let pet of pets){
    console.log(pet);
}