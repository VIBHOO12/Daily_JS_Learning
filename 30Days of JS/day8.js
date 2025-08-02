// 2621. Sleep - LeetCode

async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(resolve, millis);
    });
}

// Example 1: Using .then()
let t1 = Date.now();
sleep(100).then(() => {
    console.log("Example 1 (then):", Date.now() - t1, "ms"); 
    // ~100ms
});

// Example 2: Using async/await
async function testSleep() {
    let t2 = Date.now();
    await sleep(200);
    console.log("Example 2 (await):", Date.now() - t2, "ms");
    // ~200ms
}

testSleep();
