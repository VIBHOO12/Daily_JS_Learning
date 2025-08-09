// 2727. Is Object Empty - LeetCode

var isEmpty = function(obj) {
    if (Array.isArray(obj)) {
        return obj.length === 0;
    } else {
        return Object.keys(obj).length === 0;
    }
};

// Test cases
console.log(isEmpty({"x": 5, "y": 42})); // false
console.log(isEmpty({}));                 // true
console.log(isEmpty([null, false, 0]));  // false
console.log(isEmpty([]));     