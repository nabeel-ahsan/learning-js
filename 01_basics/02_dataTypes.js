"use strict"; // Enable strict mode to enforce cleaner JavaScript code practices.

// Display the sum of 3 and 3 in the console. Ensuring code readability by using consistent indentation.
console.log(3 
    +
     3);

// Display "John" in the console.
console.log("John");

// Declare a variable 'name' and assign it the string value "John".
let name = "John";

// Declare a variable 'age' and assign it the numerical value 18.
let age = 18;

// Declare a variable 'isLoggedIn' and assign it the boolean value false.
let isLoggedIn = false;

// Declare a variable 'state' without assigning any value to it yet.
let state;

// JavaScript Data Types:
// - Number: Represents numeric values, including integers and floating-point numbers.
// - BigInt: Represents integers with arbitrary precision, beyond the limit of the Number type.
// - String: Represents textual data enclosed within quotes.
// - Boolean: Represents true or false values.
// - Null: Represents the intentional absence of any value.
// - Undefined: Represents a variable that has been declared but has not been assigned a value.
// - Symbol: Represents a unique identifier.

// Output the data type of 'undefined' to the console.
console.log(typeof undefined); // Outputs: undefined

// Output the data type of 'null' to the console.
console.log(typeof null); // Outputs: object

/* +++++ Additional notes +++++++
    =>Strict mode helps catch common coding mistakes and "unsafe" actions, promoting cleaner and safer code.
    
    =>The typeof operator is used to determine the type of a variable or expression in JavaScript.
    
    =>Note that the typeof null returning "object" is considered a quirk or historical accident in JavaScript and is not an accurate reflection of null being an object.
*/