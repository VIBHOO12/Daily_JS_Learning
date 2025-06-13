let myset = new Set();
myset.add("raj");
myset.add("shruti");
myset.add("vibhoo");
myset.add("kanika");
console.log(myset);
console.log(myset.keys());
console.log(myset.entries());


let arr = [1,2,3,4];
let sum=0;
for(let i of arr){
    sum +=i;
}
console.log(sum);