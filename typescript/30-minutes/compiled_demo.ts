class BankAccount {

    constructor(public balance:number){
        this.balance = balance
    }
    deposit(credit: number) {
        this.balance += credit;
        return this.balance
    }
}

const b = new BankAccount(12);
b.deposit(12);
console.log(b.balance)

