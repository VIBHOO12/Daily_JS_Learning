// 2715. Timeout Cancellation - LeetCode

var cancellable = function(fn, args, t) {
    // Schedule the function to run after t milliseconds
    const timer = setTimeout(() => {
        fn(...args);
    }, t);

    // Return a cancel function
    return function cancelFn() {
        clearTimeout(timer); // Cancels the scheduled function if still pending
    };
};

// ------------------- Test Cases -------------------

const testCancellable = (fn, args, t, cancelTimeMs) => {
    const result = [];
    const start = performance.now();

    const log = (...argsArr) => {
        const diff = Math.floor(performance.now() - start);
        result.push({ "time": diff, "returned": fn(...argsArr) });
    };

    const cancel = cancellable(log, args, t);

    const maxT = Math.max(t, cancelTimeMs);

    // Schedule cancel
    setTimeout(cancel, cancelTimeMs);

    // Print result after the longer of the two delays
    setTimeout(() => {
        console.log("Result:", result);
    }, maxT + 15);
};


// Example 1
console.log("Example 1:");
testCancellable((x) => x * 5, [2], 20, 50);
// Expected output: [{"time":20,"returned":10}]

// Example 2
setTimeout(() => {
    console.log("\nExample 2:");
    testCancellable((x) => x ** 2, [2], 100, 50);
    // Expected output: []
}, 200); // Delay to separate outputs

// Example 3
setTimeout(() => {
    console.log("\nExample 3:");
    testCancellable((x1, x2) => x1 * x2, [2, 4], 30, 100);
    // Expected output: [{"time":30,"returned":8}]
}, 500);
