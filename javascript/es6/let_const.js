
let a = 10;
var b = 1;
console.log(a); ///error
console.log(b);

a = 10;
console.log(a);

for(let i=0;i<10;i++){
    console.log(i)
}

//lazy:
var arr=[]
for(let i=0;i<10;i++){
 arr[i]=function(){
     console.log(i);
 }
}
arr[6]()


let [d,e,c]=[1,2,3];
console.log(c)