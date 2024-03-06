// Declare a global variable 'a' using 'let' keyword and assign it a value of 300
let a = 300;

// Start of block scope
if (true) {
    // Declare a new block-scoped variable 'a' using 'let' keyword and assign it a value of 10
    // This 'a' variable is distinct from the global 'a' variable
    let a = 10;
    
    // Declare a new block-scoped constant 'b' and assign it a value of 20
    const b = 20;
    // Log the value of 'a' within the inner block
    // console.log("INNER: ", a);
}

// Log the value of the global 'a' variable
// console.log(a);

// Attempt to log the value of 'b' which is declared inside the inner block, causing a ReferenceError as 'b' is not accessible outside the block
// console.log(b);

// Attempt to log the value of the global variable 'c', which is commented out, causing a ReferenceError as 'c' is not declared in this scope
// console.log(c);


// Define a function named 'one'
function one(){
    // Declare a constant 'username' and assign it a value of "hitesh"
    const username = "hitesh";

    // Define a nested function named 'two' inside 'one'
    function two(){
        // Declare a constant 'website' and assign it a value of "youtube"
        const website = "youtube";
        // Log the value of 'username' from the outer function
        console.log(username);
    }
    // Attempt to log the value of 'website' declared inside 'two', causing a ReferenceError as 'website' is not accessible outside 'two'
    // console.log(website);

    // Call the nested function 'two' to log the value of 'username'
    two();
}

// Call the function 'one' to execute its code
// one();

// Start of block scope
if (true) {
    // Declare a constant 'username' and assign it a value of "hitesh"
    const username = "hitesh";
    // Start of inner block scope
    if (username === "hitesh") {
        // Declare a constant 'website' and assign it a value of "youtube"
        const website = " youtube";
        // Log the concatenation of 'username' and 'website'
        // console.log(username + website);
    }
    // Attempt to log the value of 'website' declared inside the inner block, causing a ReferenceError as 'website' is not accessible outside the block
    // console.log(website);
}

// Attempt to log the value of 'username' declared inside the outer block, causing a ReferenceError as 'username' is not accessible outside the block
// console.log(username);


// Function Declaration

// Attempt to call the function 'addone' before its declaration, causing no error due to function hoisting
console.log(addone(5));

// Define a function named 'addone' which adds 1 to its parameter 'num'
function addone(num){
    return num + 1;
}

// Function Expression

// Attempt to call the function 'addTwo' before its declaration, causing a TypeError as 'addTwo' is not a function due to function expression not being hoisted
addTwo(5);

// Define a constant 'addTwo' and assign it an anonymous function expression which adds 2 to its parameter 'num'
const addTwo = function(num){
    return num + 2;
}

/*

Additional Notes:

Scope refers to the visibility and accessibility of variables within a program.

Block scope refers to the scope of variables declared within a block of code, such as within curly braces {}.

Variables declared with let and const have block scope, meaning they are only accessible within the block they are declared in.

Function scope refers to the scope of variables declared within a function.

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during compilation.

Function declarations are hoisted entirely, allowing them to be called before they are declared.

Function expressions are not hoisted in the same way, resulting in a TypeError if they are called before their declaration.

*/