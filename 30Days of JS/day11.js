// 2637. Promise Time Limit - LeetCode

function timeLimit(fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      fn(...args)
        .then((res) => {
          clearTimeout(timer); 
          resolve(res);
        })
        .catch((err) => {
          clearTimeout(timer);
          reject(err);
        });
    });
  };
}

// ----------------- Example Usage -----------------
async function test() {
  const fn = async (n) => {
    await new Promise((res) => setTimeout(res, 100));
    return n * n;
  };

  const inputs = [5];
  const t = 50;

  const limited = timeLimit(fn, t);
  const start = performance.now();
  let result;

  try {
    const res = await limited(...inputs);
    result = { resolved: res, time: Math.floor(performance.now() - start) };
  } catch (err) {
    result = { rejected: err, time: Math.floor(performance.now() - start) };
  }

  console.log(result);
}

test();
