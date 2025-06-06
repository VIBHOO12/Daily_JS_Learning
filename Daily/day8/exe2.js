//find odd and even
let arr = [3,6,7,8,9,1,0];
let even = 0;
let odd = 0;
let evenNum = [];
let oddNum = [];
for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        even++;
        evenNum.push(arr[i]);
    } else if(arr[i]%2!=0){
         odd++;
         oddNum.push(arr[i]);
    }
}
console.log("number of even: ", even, "=> ", evenNum);

console.log("number of odd: ", odd, "=> ", oddNum);