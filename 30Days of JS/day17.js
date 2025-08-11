// 2619. Array Prototype Last - LeetCode

Array.prototype.last = function () {
    if (this.length === 0) {
        return -1;
    }
    return this[this.length - 1];
};

// Example 1
let nums1 = [null, {}, 3];
console.log(nums1.last()); // Output: 3

// Example 2
let nums2 = [];
console.log(nums2.last()); 