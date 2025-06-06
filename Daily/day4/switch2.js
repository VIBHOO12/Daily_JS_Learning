let dayofNumber = parseInt(prompt("Enter the number of the day"));

let day ;
switch(dayofNumber){
    case 1:
        day = "Sunday";
    break;

    case 2:
        day = "Monday";
    break;

     case 3:
        day = "Tuesday";
    break;

     case 4:
        day = "Wednesday";
    break;

     case 5:
        day = "Thursday";
    break;

     case 6:
        day = "Friday";
    break;

     case 7:
        day = "Saturday";
    break;

    default:
        console.log("invalid number");

}
console.log(day);