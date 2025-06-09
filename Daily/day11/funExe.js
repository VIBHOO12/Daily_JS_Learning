function showDetails(firstName,lastName,age){
    // return console.log(firstName," ",lastName, " is ", age , " years old.")
    //or
    return console.log(`${firstName} ${lastName} is ${ age} years old.`)
}
showDetails("Riya", "Sharma",34);

//or
function showDetails(firstName,lastName,age){
    return (firstName +" " +lastName + " is "+ age + " years old.")
}
console.log(showDetails("Riya", "Sharma",34));