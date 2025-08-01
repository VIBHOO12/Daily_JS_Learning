// 2623. Memoize - LeetCode

function memoize(fn) {
    const cache = new Map(); // cache store

    return function(...args) {
        const key = args.join(","); // key बनाना

        if (cache.has(key)) {
            return cache.get(key); // if present then return
        }

        const result = fn(...args); // if not then calculate
        cache.set(key, result); // store in cache
        return result;
    };
}

// Example functions
function sum(a, b) {
    return a + b;
}

function fib(n) {
    if (n <= 1) return 1;
    return fib(n - 1) + fib(n - 2);
}

function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Memoized versions
const memoizedSum = memoize(sum);
const memoizedFib = memoize(fib);
const memoizedFactorial = memoize(factorial);

console.log(memoizedSum(2, 3)); //5
console.log(memoizedSum(2, 3)); //return from cache 5
console.log(memoizedSum(3, 3)); //new calculate 

console.log(memoizedFib(5));    
console.log(memoizedFib(5));    

console.log(memoizedFactorial(5)); 
console.log(memoizedFactorial(5));
