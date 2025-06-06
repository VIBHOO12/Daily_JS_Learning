let arr = [1, 2, 3, 2, 4, 5, 1, 6, 7, 3];

let duplicates = arr.filter((item, index) => {
  return arr.indexOf(item) !== index;
});

// To remove repeated duplicates
let uniqueDuplicates = [...new Set(duplicates)];

console.log("Duplicate numbers:", uniqueDuplicates);
