
var addTwoPromises = async function(promise1, promise2) {
    return new Promise(async (resolve) => {
        const [p1, p2] = await Promise.all([promise1, promise2]);
        resolve(p1 + p2);
    });
};

//  Example 1
addTwoPromises(
    new Promise(resolve => setTimeout(() => resolve(2), 20)),
    new Promise(resolve => setTimeout(() => resolve(5), 60))
).then(console.log); // Output: 7

// Example 2
addTwoPromises(
    new Promise(resolve => setTimeout(() => resolve(10), 50)),
    new Promise(resolve => setTimeout(() => resolve(-12), 30))
).then(console.log); // Output: -2

// Example 3 (Instant resolve)
addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(console.log); // Output: 4
