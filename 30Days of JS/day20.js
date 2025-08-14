// 2722. Join Two Arrays by ID - LeetCode

function joinArrays(arr1, arr2) {
    const map = new Map();

    // Add arr1 items to the map
    for (const obj of arr1) {
        map.set(obj.id, { ...obj });
    }

    // Merge arr2 items into the map
    for (const obj of arr2) {
        if (map.has(obj.id)) {
            // Merge with arr2 overriding arr1 values
            map.set(obj.id, { ...map.get(obj.id), ...obj });
        } else {
            map.set(obj.id, { ...obj });
        }
    }

    // Convert to array and sort by id
    return Array.from(map.values()).sort((a, b) => a.id - b.id);
}

// Example 2
let arr1 = [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 3, y: 6 }
];

let arr2 = [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 }
];

console.log(joinArrays(arr1, arr2));
