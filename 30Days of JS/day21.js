
// 2625. Flatten Deeply Nested Array - LeetCode
// sol-1
// const flat = (arr, n) => arr.flat(n);

// Or
// sol-2
function flattenDepth(arr, n) {
    function helper(array, currentDepth) {
        let result = [];
        for (let el of array) {
            if (Array.isArray(el) && currentDepth < n) {
                // If it's an array and we haven't reached depth n, flatten it further
                result.push(...helper(el, currentDepth + 1));
            } else {
                // Otherwise, keep the element as is
                result.push(el);
            }
        }
        return result;
    }
    return helper(arr, 0);
}

// Example usage:
console.log(flattenDepth([1, [2, [3, [4]]]], 1)); // [1, 2, [3, [4]]]
console.log(flattenDepth([1, [2, [3, [4]]]], 2)); // [1, 2, 3, [4]]
console.log(flattenDepth([1, [2, [3, [4]]]], 3)); // [1, 2, 3, 4]
