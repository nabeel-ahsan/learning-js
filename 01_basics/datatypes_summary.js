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

let newAddress = address;// a copy of address variable is given in stack memory

newAddress = "Madrid"; // therefore the original variable remains unchanged

console.log(address);   // The value is not changed because the copy of the variable is given in the stack

console.log(newAddress);// The value is not changed because the copy of the variable is given in the stack
 

let userOne = {
    email: "user1@google.com",
    city: "Tokyo",
}

let userTwo = userOne;

userTwo.email = "user2@gmail.com"

console.log(userOne.email);// The Output is user2@gmail.com because the reference of the datatype is given in heap memory and therefore the original property of the object gets changed

console.log(userTwo.email);// The Output is user2@gmail.com because the reference of the datatype is given in heap memory and therefore the original property of the object gets changed

