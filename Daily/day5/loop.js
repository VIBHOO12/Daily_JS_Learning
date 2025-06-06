// let num = parseInt(prompt("Enter the num: "));
// for(let i=1; i<=10; i++){
//     let table = num*i;
//     console.log(num, '*', i,' = ',table);
// }

let obj = {
    name: "Harsh",
    age: 23,
};
for(let key in obj){
    console.log(`${key}:${obj[key]}`);

}
