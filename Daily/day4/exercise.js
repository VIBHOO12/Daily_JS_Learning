let marks = parseInt(prompt("Enter your marks out of 50:"));
let grad;


switch(true){
    case marks<=10:
        grad = "E";
    break;
    case marks<=20:
        grad = "D";
    break;
    case marks<=30:
        grad = "C";
    break;
    case marks<=40:
        grad = "B";
    break;
    case marks<=50:
        grad = "A";
    break;
    default:
        console.log("out of 50");
}

console.log("grad: ", grad);
// if (marks <= 10) {
//     grad = "E";
// } else if (marks <= 20) {
//     grad = "D";
// } else if (marks <= 30) {
//     grad = "C";
// } else if (marks <= 40) {
//     grad = "B";
// } else if (marks <= 50) {
//     grad = "A";
// } else {
//     console.log("Out of 50");
// }

// if (grad) {
//     console.log("Grade:", grad);
// }


