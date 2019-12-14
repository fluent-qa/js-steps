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

for (let item in Color) {
    console.log(item)
}

// Any

let notSure: any = 4
console.log(notSure)
notSure="this is testing!!"
console.log(notSure)
notSure=false
console.log(notSure)

//think about as object or any existing type for Any

let l_any = [1,true,"false"]
l_any[1]=100

l_any.forEach(element => {
    console.log(element)    
});

//void type, the absense of having any type at all
function warnUser():void {
    console.log("this is warning user!!!");
}

warnUser()


//null and undefined ,never

//Object non-primitive type, i.e. anything that is not 
// number, string, boolean, symbol, null, or undefined.

declare function create(o:Object|null):void;

create({porp:0})
create(null)
create("test") //error