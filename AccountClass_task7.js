class Account {
    constructor(id, name, balance) {
      (this.id = id), (this.name = name), (this.balance = balance);
    }
    get _id() {
      return this.id;
    }
    get _name() {
      return this.name;
    }
    set _name(newName) {
      this.name = newName;
    }
    get _balance() {
      return this.balance;
    }
    set _balance(newBal) {
      this.balance = newBal;
    }
  
    credit(amount) {
      this.balance += amount;
      return this.balance;
    }
    debit(amount) {
      if (this.balance - amount >= 0) {
        this.balance -= amount;
        return this.balance;
      }
      return "Amount exceeded balance.";
    }
    transferTo(anotherAccount, amount) {
      if (this.balance - amount >= 0) {
        this.balance -= amount;
        anotherAccount.balance += amount;
        return this.balance;
      }
      return "Amount exceeded balance.";
    }
  
    static identifyAccounts(accountFirst, accountSecond) {
      return JSON.stringify(accountFirst) == JSON.stringify(accountSecond);
    }
  
    toString() {
      return JSON.stringify(this);
    }
  }
  
  let account1 = new Account("id1", "name1", 100);
  let account2 = new Account("id2", "name2", 200);
  
  console.log(account1.transferTo(account2, 200));
  console.log(account2.balance);
  console.log(Account.identifyAccounts(account1, account2));