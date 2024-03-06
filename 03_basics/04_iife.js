// Immediately Invoked Function Expressions (IIFE) are functions that are executed immediately after they are defined. 
// They are typically wrapped inside parentheses to turn them into expressions, followed by an additional pair of parentheses to invoke them.

// Define an anonymous function inside parentheses and immediately invoke it.
// This is an example of an IIFE without any parameters.
(function chai(){
    // named IIFE
    // Log a message indicating that the database is connected
    console.log(`DB CONNECTED`);
})();

// Define an arrow function with a parameter 'name' inside parentheses and immediately invoke it with the argument 'hitesh'.
// This is an example of an IIFE with parameters.
( (name) => {
    // Log a message indicating that the database is connected, along with the provided name
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');


/*

Additional Notes:

IIFEs are commonly used to create a new scope, preventing variable name conflicts with other parts of the code.

They are also useful for creating modules, as they encapsulate code and prevent pollution of the global namespace.

By invoking the function immediately, you can execute code at a specific point in time without explicitly calling it elsewhere in the code.

*/