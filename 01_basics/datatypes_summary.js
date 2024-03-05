// Primitive Data Types: Data types that hold a single value.
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100; // Declare a constant variable 'score' and assign it the numerical value 100.
const scoreValue = 100.3; // Declare a constant variable 'scoreValue' and assign it the floating-point value 100.3.

const isLoggedIn = false; // Declare a constant variable 'isLoggedIn' and assign it the boolean value false.
const outsideTemp = null; // Declare a constant variable 'outsideTemp' and assign it the null value.
let userEmail; // Declare a variable 'userEmail' without assigning any value to it yet.

const id = Symbol('123'); // Declare a constant variable 'id' and assign it a unique Symbol value.
const anotherId = Symbol('123'); // Declare a constant variable 'anotherId' and assign it another unique Symbol value.

// Symbols are unique identifiers, even if they have the same description.

console.log(id === anotherId); // Output: false - Symbols with the same description are not equal.

// Non-Primitive (Reference) Data Types: Data types that hold a reference to a value stored elsewhere.
// Examples: Array, Objects, Functions

const carCompanies = ["BMW", "Audi", "Toyota"]; // Declare a constant variable 'carCompanies' and assign it an array of strings.
let myObj = { // Declare a variable 'myObj' and assign it an object with name and age properties.
    name: "John",
    age: 22,
}

const myFunction = function(){ // Declare a constant variable 'myFunction' and assign it a function.
    console.log("Hello world");
}

console.log(typeof anotherId); // Output: "symbol" - Displays the data type of 'anotherId'.

// Memory Management:
// JavaScript manages memory differently for primitive and non-primitive data types.
// - Primitive data types are stored directly in the stack memory, while non-primitive data types (objects) are stored in the heap memory, and variables hold references to their locations.

// Stack Memory:
let address = "London"; // Declare a variable 'address' and assign it the string value "London".
let newAddress = address; // Assign a copy of the 'address' variable to 'newAddress'.
newAddress = "Madrid"; // Update the value of 'newAddress'.

console.log(address); // Output: "London" - Original variable remains unchanged.
console.log(newAddress); // Output: "Madrid" - Updated value is stored in a new memory location.

// Heap Memory:
let userOne = { // Declare a variable 'userOne' and assign it an object.
    email: "user1@google.com",
    city: "Tokyo",
}

let userTwo = userOne; // Assign 'userOne' to 'userTwo'.

userTwo.email = "user2@gmail.com"; // Modify 'email' property of 'userTwo'.

console.log(userOne.email); // Output: "user2@gmail.com" - Changes are reflected in 'userOne'.
console.log(userTwo.email); // Output: "user2@gmail.com" - Changes are reflected in 'userTwo'.


/*

Additional notes:

Primitive data types are immutable, meaning their values cannot be changed directly.

Non-primitive data types are mutable, meaning their values can be changed directly.

Symbols are often used as unique identifiers to prevent naming conflicts.

Understanding the difference between primitive and non-primitive data types is crucial for effective memory management and avoiding unexpected behavior in JavaScript programs.

*/