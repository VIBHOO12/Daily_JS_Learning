
// funtion creation
function fun(name, age){
    return console.log("regular fun", name,age);
}
fun("vibhoo", 23);


//arrow funtion
const a = () =>{
    console.log("arrow funtion");
};
a();


// function expression
const b = function(){
    console.log("function expression");
};
b();
b();


// function fun2(name, age)
// {
//     return ("hii, I am regular function.",age, name);
// }
// console.log(fun2("shivam", 23)); //Ye JavaScript ka comma operator ka behavior hai, jisme sirf last expression return hota hai.


// function showMessage(){
//     alert("Hello world!");
// }
// showMessage();

// function fun2(name, age){
//     alert(name,age);
// }
// fun2("vibhoo" +" "+ 23);

