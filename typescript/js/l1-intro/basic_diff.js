"use strict";
function f() {
    return "Hello";
}
function f(s) {
    return "Hell " + s;
}
console.log(f().indexOf(1));
console.log(f("world"));
// declare var document;
// document.title ="Hello"
// declare var $; it is error,jquery is not included 
// function type
function vote(candidate, callback) {
    console.log(candidate + " is voted");
    callback("voted");
}
vote("patrick", function (result) {
    if (result == "voted") {
        console.log("one voted ticket is completed");
    }
    else {
        console.log("one vote is failed,please check it!");
    }
});
function addFriend(friend) {
    var name = friend.name;
    return name + " added";
}
function getX(p) {
    return p.x;
}
class CPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
console.log(getX(new CPoint(1, 2)));
console.log(getX({ x: 0, y: 1 }));
// console.log(getX({x:0})) //error,because type is not matching
//class in typescript
class BankAccount {
    constructor(balance) {
        this.balance = 0;
        this.balance = balance;
    }
    deposte(credit) {
        return this.balance + credit;
    }
    withdraw(debit) {
        return this.balance - debit;
    }
}
class CheckingAccount extends BankAccount {
    constructor(balance) {
        super(balance);
    }
    writeCheck(debit) {
        this.balance -= debit;
    }
}
function compute(op, a, b) {
    //switch case how to 
    switch (op) {
        case 0 /* ADD */: //0
            return a + b;
        case 1 /* DIV */: //1
            return a / b;
    }
}
