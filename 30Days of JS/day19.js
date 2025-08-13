
// 2724. Sort By - LeetCode

var sortBy = function(arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
}

// Example 1: Sort numbers by their negative value
console.log(sortBy([5, 1, 3], x => -x)); 
// Output: [5, 3, 1]

// Example 2: Sort strings by length
console.log(sortBy(["apple", "kiwi", "banana"], str => str.length)); 
// Output: ["kiwi", "apple", "banana"]
