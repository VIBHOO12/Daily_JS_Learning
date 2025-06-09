// let skills = ['HTML', 'CSS', 'React'];

// let r=skills.includes("JavaScript");
//     if(!r){
//     skills.push("JavaScript");
//     }
 
// console.log( "is javascrpit is there" + r);
// console.log(skills);

// let sentence = "Kanika is learning JavaScript";
// let ans = sentence.split("_").reverse().join(" ");
// console.log(ans);

// let messy = [0, "Kanika", false, "", 42, null, undefined];
// let cleaned = messy.filter(value=> 
// );
// console.log(cleaned);

const a = [5, 1, 2, 9, 2];
const b = [3, 4, 1, 6, 9];

let ans  = a.concat(b);
console.log(ans);
let ans2 = ans.filter((value,index) => {
        if(index == ans.indexOf(value)){
           return true;
        }
    }).sort().slice(0,5);
console.log(ans2);
  


// // Expected Output: [1, 2, 3, 4, 5]


const cart = [
  { name: "Book", price: 200, quantity: 1 },
  { name: "Pen", price: 10, quantity: 0 },
  { name: "Bag", price: 300, quantity: 2 },
  { name: "Notebook", price: 50, quantity: 1 }
];

const result = cart
  .filter(item => item.quantity > 0)             
  .map(item => ({ name: item.name, total: item.price * item.quantity })) // Add total
  .sort().slice(0,2);

console.log(result);



// let arr = [1, 3, 2, 3, 4, 1, 3];
// let ans = arr.sort();
// console.log(ans);
// let max;
// for(let i=0; i<ans.length; i++){
//     if(arr[i] == arr[i+1]){
//         max++;
//     }else if(arr[i] > arr[i+1]) {
//         arr[i] = arr[i+1] ;
//     } 
    
//     console.log(max);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7,8,9];
// let chunkSize = 3;
// let result = [];
//  let ans = arr.slice(i, i + chunkSize);
// for(let i = 0; i < arr.length; i += chunkSize){
//     let ans = arr.slice(i, i + chunkSize);
//     result.push(chunk);
// }

// console.log(result);


// const str = "  I am learning JavaScript and React  ";
// let ans = str.split(" ").reverse().filter(word => word.length > 3).join("");
// console.log(ans);