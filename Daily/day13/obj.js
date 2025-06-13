let obj = {
    name: "karan",
    age: 34,
    email: "karan@gamil.com"
};
console.log(obj.email);

for(let key in obj){
    console.log(`${key} => ${obj[key]}`);
}

let obj1 = {
    name:"rahul",
    profession:"student",
    hobbies: ["reading", "singing"],
    bio: function(){
        console.log(`Hi! I am ${this.name}, my profession is ${this.profession}`);
    }
};
obj1.bio();


// create object using function constructor
function Car(make,model,year){
    this.make = make;
    this.model=model;
    this.year = year;
}

const car1 = new Car("Toyota", "Carmy", 2022);
const car2 = new Car("Honda","Civic",2020);
console.log(car1);
console.log(car2);