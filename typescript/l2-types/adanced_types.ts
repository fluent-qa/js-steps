// Array

let l1:number[] =[1,2,3]
console.log(l1.length)
let lArray1: Array<number> =[1,2,3]
console.log(lArray1.length)

//tuple

let x_tuple: [string,number];
x_tuple=["this",2]
console.log(x_tuple)
console.log(x_tuple[0],x_tuple[1])

//error 
// x_tuple[2]="hello" 

//enum
//enum
enum Color {RED,Green=2,Blue}
let cx:Color = Color.Green
let d:Color = Color.RED
let e:Color = Color.Blue
console.log(cx);
console.log(d);
console.log(e); // it is 3 now
// very interesting usage
console.log(Color[2])



