// 2677. Chunk Array - LeetCode

function chunkArray(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    // slice from i to i+size (not inclusive)
    result.push(arr.slice(i, i + size));
  }
  return result;
}

// Example-1
console.log(chunkArray([1,2,3,4,5], 1)); 
// Example-2
console.log(chunkArray([1,9,6,3,2], 3)); 
// Example-3
console.log(chunkArray([], 1)); 
