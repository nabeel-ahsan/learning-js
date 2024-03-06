// Function Basics:

// Function Declaration
function sayHello() {
    console.log("Hello!");
}

// Function Expression
const sayGoodbye = function() {
    console.log("Goodbye!");
};

// Arrow Function
const add = (a, b) => a + b;

// Anonymous Function
const greet = function(name) {
    console.log(`Hello, ${name}!`);
};

// Named Function Expression
const factorial = function fact(n) {
    return n === 0 ? 1 : n * fact(n - 1);
};

// Immediately Invoked Function Expression (IIFE):

// IIFE with function declaration
(function() {
    console.log("IIFE executed!");
})();

// IIFE with arrow function
(() => {
    console.log("IIFE with arrow function executed!");
})();

// Scope:

// Function Scope
function outerFunction() {
    const outerVar = "I'm in the outer function!";
    
    function innerFunction() {
        console.log(outerVar); // Access outerVar from the outer function
    }
    
    innerFunction();
}

// Block Scope
function blockScopeExample() {
    if (true) {
        const blockVar = "I'm in a block!";
        console.log(blockVar);
    }
    // console.log(blockVar); // Error: blockVar is not defined outside the block
}

// Lexical Scope
function outer() {
    const outerVar = "I'm outer!";
    
    function inner() {
        console.log(outerVar); // Inner function has access to outer function's variables
    }
    
    inner();
}

// `this` Keyword:

// `this` in Object Methods
const myObj = {
    name: "John",
    greet: function() {
        console.log(`Hello, ${this.name}!`);
    }
};

myObj.greet(); // Access name property using `this` keyword

// `this` in Arrow Functions
const arrowFunctionThis = () => {
    console.log(this); // `this` in arrow function retains its lexical scope (usually the global scope)
};

arrowFunctionThis();

// `this` in Constructor Functions
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("Alice", 30);

// `this` in Event Handlers
const button = document.getElementById("myButton");
button.addEventListener("click", function() {
    console.log(this); // `this` refers to the element that triggered the event (the button in this case)
});

// `this` in Global Scope
console.log(this); // In a browser environment, `this` refers to the global object (window)
