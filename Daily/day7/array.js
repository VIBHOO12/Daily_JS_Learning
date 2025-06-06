let arr = [2,4,5,6,7];
// console.log(arr);
console.log(arr.length);
// arr.push(8);
arr.pop();
console.log(arr);

let arr1 = ["hii", "my", "name", "is", "xyz"];
console.log(arr1.slice(2,4));
console.log(arr1.toString().replaceAll(",", " "));
console.log(arr1.shift()); //remove first element
console.log(arr1);

let arr2 = [2,4, 6,8];
// let res = arr2.map(y => y*2);
let res = arr2.filter(a => a>4);
console.log(res);


