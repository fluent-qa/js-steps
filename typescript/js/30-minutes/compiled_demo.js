"use strict";
class BankAccount {
    constructor(balance) {
        this.balance = balance;
        this.balance = balance;
    }
    deposit(credit) {
        this.balance += credit;
        return this.balance;
    }
}
const b = new BankAccount(12);
b.deposit(12);
console.log(b.balance);
