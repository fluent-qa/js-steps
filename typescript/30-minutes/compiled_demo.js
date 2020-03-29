var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this.balance = 0;
    }
    BankAccount.prototype.deposit = function (credit) {
        this.balance += credit;
        return this.balance;
    };
    return BankAccount;
}());


var b = new BankAccount()
b.deposit(12)
console.log(b.balance)