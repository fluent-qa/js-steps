const getClassNameSymbol = Symbol();

class C {
    [getClassNameSymbol](){
       return "C";
    }
}

let c         = new C();
let className = c[getClassNameSymbol]();  // "C"


import * as exportdemo from "./export_demo"

exportdemo.calTax()