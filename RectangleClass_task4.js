class Rectangle {
  constructor(length, width) {
    (this.length = length), (this.width = width);
  }

  get _length() {
    return this.length;
  }
  set _length(lengthArg) {
    this.length = lengthArg;
  }

  get _width() {
    return this.width;
  }
  set _width(widthArg) {
    this.width = widthArg;
  }

  getArea() {
    return this.length * this.width;
  }
  getPerimeter() {
    return 2 * (this.length + this.width);
  }
  toString() {
    return `Rectangle with sides ${this.length} and ${this.width}`;
  }
}

let figure = new Rectangle(10, 10);

figure._length = 20;

console.log(figure.toString());
