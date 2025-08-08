// 2721. Execute Asynchronous Functions in Parallel - LeetCode
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completedCount = 0;

        if (functions.length === 0) {
            resolve([]); // No functions, resolve immediately
            return;
        }

        functions.forEach((fn, index) => {
            // Start the promise immediately
            fn()
                .then(value => {
                    results[index] = value; // Keep order
                    completedCount++;
                    if (completedCount === functions.length) {
                        resolve(results);
                    }
                })
                .catch(err => {
                    reject(err); // First rejection ends it
                });
        });
    });
};

 const promise = promiseAll([() => new Promise(res => res(42))])
 promise.then(console.log); // [42]