function argumentsLength(...args) {
  return args.length;
}

let args = [1, 3, "8"];
let result = argumentsLength(...args);
console.log(result);