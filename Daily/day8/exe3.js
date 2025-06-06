let arr = [4,44,4,8,7,9,2,7,2];
let dublicatesCount = 0;
let dublicates = [];
for(let i=0; i<arr.length; i++){
    if(arr.includes(i)== arr.includes(i-1)){
        dublicatesCount++;
        dublicates.push(arr[i]);
    }
}

console.log("count of dublicte:", dublicatesCount);
console.log("number", dublicates);