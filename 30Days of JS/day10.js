// 2725. Interval Cancellation - LeetCode

var cancellable = function(fn, args, t) {
    // Call the function immediately
    fn(...args);

    // Start the interval for repeated calls
    const intervalId = setInterval(() => fn(...args), t);

    // Return a cancel function
    const cancelFn = () => clearInterval(intervalId);

    return cancelFn;
};

//  Example usage:

const fn = (x) => x * 2;
const args = [4];
const t = 35;
const cancelTimeMs = 190;

const cancelFn = cancellable(fn, args, t);

setTimeout(cancelFn, cancelTimeMs);
