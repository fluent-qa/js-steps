function f(x,y,z){
    return x+y+z;
}

console.log(f(1,2,3))
let args = [1,2,3]
console.log(f(...args))
console.log(f.apply(null,args))