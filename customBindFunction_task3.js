Function.prototype.customBind = function (context, ...args) {
  return (...otherArgs) => this.call(context, ...args, ...otherArgs);
};

function f(a, b, c) {
  console.log(a, b, c, this.name);
}

obj = {
  name: "John",
};

let binder = f.customBind(obj, 1, 2, 3);
console.log(binder());


  