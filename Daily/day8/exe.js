
// find number of 0 and 1
let arr = [0,1,1,1,0,0,0,1,1,0];
let count0=0;
let count1 = 0;
for(let i=0; i<arr.length; i++){
   if(arr[i]==0){
   count0++;
   } else if(arr[i] == 1)
    count1++;
   
}
console.log("count of 0: ", count0);
console.log("count of 1: ", count1);

// for (let num of arr) {
//   if (num % 2 === 0) evenCount++;
//   else oddCount++;
// }