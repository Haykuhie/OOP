class Author {
  constructor(name, email, gender) {
    (this.name = name), (this.email = email), (this.gender = gender);
  }

  get _name() {
    return this.name;
  }
  set _name(newName) {
    this.name = newName;
  }

  get _email() {
    return this.email;
  }
  set _email(newEmail) {
    this.email = newEmail;
  }
  get _gender() {
    return this.gender;
  }
  set _gender(newGender) {
    this.gender = newGender;
  }

  toString() {
    return JSON.stringify(this);
  }
}

let author1 = new Author("CoolAuthor", "coolauthor@gmail.com", "male");

author1._gender = "female";

console.log(author1.toString());

//********************   BOOK CLASS***********************

class Book {
  constructor(title, author, price, quantity) {
    this.author = author;
    this.title = title;
    this.price = price;
    this.quantity = quantity;
  }

  get _title() {
    return this.title;
  }
  set _title(newTitle) {
    this.title = newTitle;
  }
  get _author() {
    return this.author;
  }
  set _author(newAt) {
    this.author = newAt;
  }
  get _price() {
    return this.price;
  }
  set _price(newPrice) {
    this.price = newPrice;
  }
  get _quantity() {
    return this.quantity;
  }
  set _quantity(newQY) {
    this.quantity = newQY;
  }

  getProfit() {
    return this.price * this.quantity;
  }

  toString() {
    return JSON.stringify(this);
  }
}

let book1 = new Book("bookTitle", author1, 10, 100);

console.log(book1.toString());