// Define an object named 'user' with properties 'username' and 'price', and a method 'welcomeMessage'
const user = {
    username: "hitesh",
    price: 999,
    
    // Define a method 'welcomeMessage' inside the object using function expression syntax
    welcomeMessage: function() {
        // Log a welcome message using 'this' keyword to access the object's properties
        console.log(`${this.username} , welcome to website`);
        // Log the 'this' keyword, which refers to the current object ('user' in this case)
        console.log(this);
    }
}

// Call the 'welcomeMessage' method of the 'user' object
// user.welcomeMessage()

// Modify the 'username' property of the 'user' object
// user.username = "sam"

// Call the 'welcomeMessage' method of the 'user' object after modifying the 'username' property
// user.welcomeMessage()

// Log the 'this' keyword outside of any object context, which refers to the global object (in a browser, it refers to the window object)
// console.log(this);

// Define a function named 'chai' using arrow function syntax
const chai = () => {
    // Declare a variable 'username' and assign it a value of "hitesh"
    let username = "hitesh"
    // Log the value of 'this' inside the arrow function, which refers to the 'this' value of the enclosing lexical scope (global scope in this case)
    console.log(this);
}

// Call the 'chai' function
// chai()

// Define an arrow function named 'addTwo' that takes two parameters 'num1' and 'num2' and returns their sum
const addTwo = (num1, num2) => ({username: "hitesh"})

// Call the 'addTwo' function with arguments 3 and 4, which returns an object with a 'username' property set to "hitesh"
console.log(addTwo(3, 4))


// Important Concepts:

// 'this' keyword in JavaScript refers to the object it belongs to. In a method, 'this' refers to the owner object. 
// In a function, 'this' refers to the global object, unless the function is part of an object. Then it refers to the object itself.

// Arrow functions in JavaScript provide a concise syntax for writing function expressions. They do not have their own 'this' value. 
// Instead, 'this' is inherited from the enclosing lexical context (usually the parent scope). Arrow functions are useful for 
// writing shorter and cleaner code, especially for callbacks and anonymous functions. However, they are not suitable for 
// methods that need access to their own 'this' value or for functions that serve as constructors.

/*

Additional Notes:

Arrow functions are especially useful in scenarios where you want to preserve the context of 'this' from the surrounding code.

Arrow functions do not have their own 'this' context; instead, they inherit 'this' from the enclosing scope. This makes them particularly useful when working with asynchronous code or within nested functions where the context may change.

It's important to note that arrow functions are not suitable for all scenarios, particularly when you need dynamic 'this' binding or intend to use them as constructors.

*/