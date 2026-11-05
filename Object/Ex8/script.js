class BankAccount {
  constructor(accountNumber, owner, balance = 0) {
    this.accountNumber = accountNumber;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      return false;
    }

    this.balance += amount;
    return true;
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      return false;
    }

    this.balance -= amount;
    return true;
  }

  getBalance() {
    return this.balance;
  }
}

const account1 = new BankAccount("A001", "山田", 10000);
const account2 = new BankAccount("A002", "佐藤", 5000);

account1.deposit(3000);
account2.withdraw(2000);

console.log(`${account1.owner}の残高：${account1.getBalance()}`); // 13000
console.log(`${account2.owner}の残高：${account2.getBalance()}`); // 3000
