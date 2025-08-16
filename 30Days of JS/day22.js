// 2705. Compact Object - LeetCode
function compactObject(obj) {
  if (Array.isArray(obj)) {
    // If it's an array, filter out falsy values and recursively clean children
    return obj
      .map(compactObject) // clean nested
      .filter(Boolean);   // remove falsy
  } else if (obj !== null && typeof obj === "object") {
    // If it's an object, recursively clean keys
    let result = {};
    for (let key in obj) {
      let value = compactObject(obj[key]);
      if (Boolean(value)) {
        result[key] = value;
      }
    }
    return result;
  } else {
    // Primitive value -> return as is
    return obj;
  }
}
console.log(compactObject([null, 0, false, 1]));
// Output: [1]

console.log(compactObject({a: null, b: [false, 1]}));
// Output: { b: [1] }

console.log(compactObject([null, 0, 5, [0], [false, 16]]));
// Output: [5, [], [16]]
