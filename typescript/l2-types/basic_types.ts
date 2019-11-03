
//boolean type

let isDone: boolean = false;
console.log(isDone);

//Numble Type

let decimal: number = 6;
console.log(decimal);
let hex: number = 6;
console.log(hex);
let binary: number = 6;
console.log(binary);
let octal: number = 6;
console.log(octal);

//string
let color:string     = "red";
    color            = 'red';
let fullName: string = `Patrick Patrick`;
let age: number      = 37;
let sentence: string = `Hello,my name is ${fullName}, and ${age+1} years old`;
console.log(sentence);

//array
let list: number[]       = [1,2,3];
let list1: Array<number> = [1,2,3];
console.log(list);
console.log(list1);

//tuple
let x: [string,number] ;
x = ["hello",10]
// let y:[string,number] = [10,10] ; //error here
console.log(x);

console.log(x[0]);
console.log(x[1]);
console.log(x[0].substr(1));
x.push("world");
console.log(x.length)

//Any 

let notSureType: any = 4;
console.log(notSureType);
notSureType = 'string'
console.log(notSureType);
let anyArray: any[] = [1,"string",9032,[1,2,34]]
console.log(anyArray);
console.log(anyArray[0])

//Void
function noReturn(): void {
    console.log("no return value");
}

//Null nad Undefined
//Null and Underfnded 
let u: undefined = undefined
let n: null      = null;
console.log(u);
console.log(n);

//never

//Object
// declare function create(o:object | null): void
// create({prop:0});

//as/cast

let someValue: any  = "String ";
let strLen: number  = (<string>someValue).length;
let strLen1: number = (someValue as string ).length;
console.log(strLen);




