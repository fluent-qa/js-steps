class PersonClass {
    firstName: string;
    lasteName: string;
    constructor(firstName: string, lasteName: string) {
        this.firstName = firstName;
        this.lasteName = lasteName;
    }

    // 方法 
    disp(): void {
        console.log(this.firstName + "," + this.lasteName)
    }
}

class Shape {
    Area: number

    constructor(a: number) {
        this.Area = a
    }
}

class Circle extends Shape {
    disp(): void {
        console.log("圆的面积:  " + this.Area)
    }
}

var obj = new Circle(223);
obj.disp()

class Root {
    root!: string; //no initialized ,report error
    static lowLevel: number = 0;
}

class Child extends Root { }
class Leaf extends Child { } // 多重继承，继承了 Child 和 Root 类

var leaf = new Leaf();
leaf.root = "hello"
console.log(leaf.root)
console.log(Root.lowLevel)


interface ILoan {
    interest: number
}

class AgriLoan implements ILoan {
    interest: number
    rebate: number

    constructor(interest: number, rebate: number) {
        this.interest = interest
        this.rebate = rebate
    }
}

var agiLoan = new AgriLoan(10, 1)
console.log("利润为 : " + agiLoan.interest + "，抽成为 : " + agiLoan.rebate)



var sites = {
    site1: "Runoob",
    site2: "Google",
    sayHello: function () { } // 类型模板
};
sites.sayHello = function () {
    console.log("hello " + sites.site1);
};
sites.sayHello();

var invokesites = function (args: { site1: string, site2: string }) {
    console.log("site1 :" + args.site1)
    console.log("site2 :" + args.site2)
}
invokesites(sites)

//duck typing

interface IPoint { 
    x:number 
    y:number
    //     return x.toString()+":"+y.toString()
    // }
} 
function addPoints(p1:IPoint,p2:IPoint):IPoint { 
    var x = p1.x + p2.x 
    var y = p1.y + p2.y 
    return {x:x,y:y} 
} 
 
// 正确
var newPoint = addPoints({x:3,y:4},{x:5,y:1})  
 console.log(newPoint.x)
 console.log(newPoint.y)
// 错误 
// var newPoint2 = addPoints({x:1},{x:4,y:3})