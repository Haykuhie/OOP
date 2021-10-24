Function.prototype.customApply = function (context, args) {
  return this.call(context, ...args);
};

function f(a, b, c) {
  console.log(a, b, c, this.name);
}

obj = {
  name: "John",
};

console.log(f.customApply(obj, [1, 2, 3]));