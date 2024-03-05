// Global Execution Context:

// Variables and functions declared outside any function are in the global scope
// Global Execution Context is created before any code is executed
// When a JavaScript program starts running, it creates a global execution context.
// It consists of two phases: memory creation phase and execution phase

console.log("Start of script");

// Function declaration
function greet(name) {
    console.log("Hello, " + name);
}

// Function invocation
greet("John");

console.log("End of script");



// Memory Creation Phase:

// During this phase, memory is allocated for variables and functions (hoisting)
// Variable declarations are initialized with 'undefined' (except for let and const)
// Function declarations are stored in memory in their entirety

// Example:

console.log(myVar); // Output: undefined
var myVar = 5;

// Equivalent to:

var myVar;
console.log(myVar); // Output: undefined
myVar = 5;

// Explanation:
// In the memory creation phase, JavaScript sets up memory for the variable myVar and initializes it with the value undefined.
// During the execution phase, myVar is assigned the value 5. Therefore, accessing myVar before its declaration logs undefined.



// Execution Phase:

// During this phase, code is executed line by line from top to bottom
// Variables are assigned their values, and functions are invoked

// Example:

var y = 10;
console.log(y); // Output: 10

// Call Stack:

// Mechanism that JavaScript uses to manage function invocation (call)
// Functions are pushed onto the call stack when called and popped off when completed

// Example:

function first() {
    console.log("First function");
    second();
}

function second() {
    console.log("Second function");
}

first(); // Output: "First function", "Second function"

// Event Loop:

// Mechanism responsible for checking the call stack and handling asynchronous events
// Ensures that asynchronous callback functions are executed after the call stack is empty

// Example:

setTimeout(function() {
    console.log("Async callback");
}, 2000);

console.log("End of script");

// Output:
// "End of script"
// (After 2 seconds) "Async callback"
