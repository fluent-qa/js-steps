function f(){
    return "Hello"
}

function f(s:string){
    return "Hell "+s
}

console.log(f().indexOf(1))

console.log(f("world"))

// declare var document;
// document.title ="Hello"

 // declare var $; it is error,jquery is not included 

 // function type

 function vote(candidate:string,callback:(result:string)=>any){
     console.log(candidate +" is voted")
     callback("voted")
    }

    vote("patrick",function(result:string){
        if(result=="voted"){
            console.log("one voted ticket is completed")
        }else{
            console.log("one vote is failed,please check it!")
        }
    });

    //object types
interface Friend{
    name: string;
    hobby: string;
}

function addFriend(friend : Friend)  {
    var name = friend.name
    return name+" added"
}


// duck typing/structural subtyping

interface Point{
    x:number;
    y:number;
}

function getX(p:Point){
    return p.x
}

class CPoint{
    x!: number;
    y!: number;

    constructor(x:number,y:number){
        this.x=x;
        this.y=y;
    }
}

console.log(getX(new CPoint(1,2)))
console.log(getX({x:0,y:1}))
// console.log(getX({x:0})) //error,because type is not matching

//class in typescript
class BankAccount{
    balance=0;
    constructor(balance:number){
        this.balance=balance
    }
    deposte(credit:number){
        return this.balance+credit
    }
    withdraw(debit: number){
        return this.balance - debit
    }
}

class CheckingAccount extends BankAccount {
    constructor(balance:number){
        super(balance)
    }
    writeCheck(debit:number){
        this.balance -=debit
    } 
}

//generated js

//enum type
const enum Operator{
    ADD,
    DIV,
    MUL,
    SUB
}

function compute(op:Operator,a:number,b:number){
    //switch case how to 
    switch(op){
        case Operator.ADD: //0
            return a+b;
        case Operator.DIV: //1
            return a/b;
    }
}

//generic
interface Array<T> {
    reverse():T[];
    sort(compareFn?:(a:T,b:T)=>number): T[];
}


