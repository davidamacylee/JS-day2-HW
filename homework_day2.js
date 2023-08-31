//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayAllFoods(person) {
    let person_array = Object.values(person);
    for (let i = 0; i < person_array.length; i++) {
        let person_value = person_array[i]
        if (typeof person_value ==  "string") {
            console.log(person_value);
        } else if (Array.isArray(person_value)) {
            for (let j = 0; j < person_value.length; j++) {
                console.log(person_value[j]);
            }
        } else if (typeof person_value == "object") {
            person_object = Object.values(person_value);
            for (let k = 0; k < person_object.length; k++) {
                console.log(person_object[k]);
            }
        }
    }
}

displayAllFoods(person3);

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


// Use an arrow to create the printInfo method

    printInfo = () => console.log(`Hi! My name is ${this.name} and I am ${this.age} years old.`)

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

    addAge = (birthdays) => this.age = this.age + birthdays;
}

let Josh = new Person('Josh', 27);
let Mary = new Person('Mary', 25);

Josh.printInfo();
Mary.printInfo();

Josh.addAge(3);
Josh.printInfo();

Mary.addAge(3);
Mary.printInfo();


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const isBigWord = (word) => {
    return new Promise((resolve, reject) => {
        if (word.length > 10) {
            resolve('Big word');
        } else {
            reject('Small Number');
        }
    })
}

isBigWord('hi')
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})

isBigWord('unbelievable')
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
})