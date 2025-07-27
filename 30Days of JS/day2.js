// 2626. Array Reduce Transformation- #LeetCode
function customReduce(nums, fn, init) {
    let val = init;
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
}

let nums = [1, 2, 3, 4];
let result = customReduce(nums, function(accum, curr) {
    return accum + curr*curr;
}, 0);

console.log(result);