declare const myPoint: {
    x:number,
    y:number
}

interface Point {
    x: number;
    y: number;
}


declare const myPoint1: Point

interface Point {
    z: number
}

// console.log(myPoint1.z) //allowed

class NicePoint implements Point {
    x: number
    y: number
    z: number

}

interface Crazy {
    new(): {
        hello: number
    }


}

class CrazyClass implements Crazy {
    constructor(){
        return { hello:123 }
    }
}

const crazy = new CrazyClass()
console.log(crazy)