// Define a symbol named mySym with the description "key1"
const mySym = Symbol("key1")

// Define an object named JsUser using object literals, containing various properties such as name, age, location, etc.
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary", // Note: Property name with spaces must be accessed using square brackets
    [mySym]: "mykey1", // Using a symbol as a property key
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// Access the email property of JsUser using dot notation
// console.log(JsUser.email)

// Access the email property of JsUser using square bracket notation
// console.log(JsUser["email"])

// Access the full name property of JsUser using square bracket notation
// console.log(JsUser["full name"])

// Access the property represented by the symbol mySym within JsUser
// console.log(JsUser[mySym])

// Modify the value of the email property of JsUser
JsUser.email = "hitesh@chatgpt.com"

// Prevent any further modifications to JsUser by freezing the object
// Object.freeze(JsUser)

// Attempt to modify the email property of JsUser after freezing
JsUser.email = "hitesh@microsoft.com"

// Log the JsUser object after attempting to modify the frozen object
// console.log(JsUser);

// Add a new method named greeting to JsUser object
JsUser.greeting = function(){
    console.log("Hello JS user");
}

// Add another method named greetingTwo to JsUser object, which uses "this" keyword to access object properties
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// Call the greeting method of JsUser
console.log(JsUser.greeting());

// Call the greetingTwo method of JsUser
console.log(JsUser.greetingTwo());


/*

Additional Notes:

Objects in JavaScript are collections of key-value pairs, where keys are strings or symbols (unique identifiers) and values can be any data type.

Symbols are unique and immutable data types introduced in ES6, often used as property keys to prevent naming conflicts.

Object literals provide a concise syntax for creating objects in JavaScript.
Object properties can be accessed using dot notation (object.property) or square bracket notation (object['property']), the latter being necessary for properties with special characters or symbols.

Object.freeze() method is used to prevent modifications to an object, making it immutable. Once frozen, an object cannot be changed. Any attempt to modify a frozen object will fail silently in strict mode or throw an error in non-strict mode.

Methods can be added to objects just like properties, and they can access object properties using the this keyword.

*/