// leetcode JavaScript Problem
var map = function(arr, fn) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(fn(arr[i], i));
    }
    return result;
};

// Example 1
const arr1 = [1, 2, 3];
const plusOne = function(n) {
    return n + 1;
};
console.log(map(arr1, plusOne)); // Output: [2, 3, 4]

// Example 2
const arr2 = [1, 2, 3];
const plusIndex = function(n, i) {
    return n + i;
};
console.log(map(arr2, plusIndex)); // Output: [1, 3, 5]

// Example 3
const arr3 = [10, 20, 30];
const constant = function() {
    return 42;
};
console.log(map(arr3, constant)); // Output: [42, 42, 42]
