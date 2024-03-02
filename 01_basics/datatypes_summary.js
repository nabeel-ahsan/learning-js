//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const carCompanies = ["BMW", "Audi", "Toyota"];
let myObj = {
    name: "John",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  stack (primitive), Heap (Non-Primitive)

let address = "London";

let newAddress = address;
newAddress = "Madrid";

console.log(address);
console.log(newAddress);

let userOne = {
    email: "user1@google.com",
    city: "Tokyo",
}

let userTwo = userOne;

userTwo.email = "user2@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
