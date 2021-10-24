Function.prototype.customCall = function (context, ...args) {
  const fn = Symbol();
  context[fn] = this;
  return context[fn](...args);
};

function f(a, b, c) {
  console.log(a, b, c, this.name);
}

obj = {
  name: "John",
};
console.log(f.customCall(obj, 1, 2, 3));