const score = 400; // Declare a constant variable 'score' and assign it the numerical value 400.
// console.log(score); // Output: 400 - Output the value of 'score' to the console.

const balance = new Number(100); // Create a number object with the value 100.
// console.log(balance); // Output: [Number: 100] - Output the number object to the console.

// Number Methods:
// console.log(balance.toString().length); // Output: 3 - Convert the number object to a string and output its length.
// console.log(balance.toFixed(1)); // Output: "100.0" - Convert the number object to a string with a specified number of decimal places.

const otherNumber = 123.8966; // Declare a constant variable 'otherNumber' and assign it the numerical value 123.8966.
// console.log(otherNumber.toPrecision(4)); // Output: "123.9" - Format the number with the specified precision.

const hundreds = 1000000; // Declare a constant variable 'hundreds' and assign it the numerical value 1000000.
// console.log(hundreds.toLocaleString('en-IN')); // Output: "10,00,000" - Format the number as a locale-specific string.

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// Math Object: Provides mathematical constants and functions.
// console.log(Math); // Output: Displays the Math object and its properties and methods.
// console.log(Math.abs(-4)); // Output: 4 - Returns the absolute value of a number.
// console.log(Math.round(4.6)); // Output: 5 - Rounds a number to the nearest integer.
// console.log(Math.ceil(4.2)); // Output: 5 - Rounds a number up to the nearest integer.
// console.log(Math.floor(4.9)); // Output: 4 - Rounds a number down to the nearest integer.
// console.log(Math.min(4, 3, 6, 8)); // Output: 3 - Returns the smallest of zero or more numbers.
// console.log(Math.max(4, 3, 6, 8)); // Output: 8 - Returns the largest of zero or more numbers.

console.log(Math.random()); // Output: A random number between 0 and 1 (exclusive).
console.log((Math.random()*10) + 1); // Output: A random number between 1 and 10.
console.log(Math.floor(Math.random()*10) + 1); // Output: A random integer between 1 and 10 (inclusive).

const min = 1; // Declare a constant variable 'min' and assign it the numerical value 1.
const max = 6; // Declare a constant variable 'max' and assign it the numerical value 6.
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Output: A random integer between 1 and 6 (inclusive).

// Additional Math Methods:
// - Math.sqrt(x): Returns the square root of a number.
// - Math.pow(x, y): Returns the base to the exponent power (x^y).
// - Math.sin(x), Math.cos(x), Math.tan(x): Returns the sine, cosine, and tangent of an angle (in radians).
// - Math.log(x), Math.log10(x), Math.log2(x): Returns the natural, base-10, and base-2 logarithms of a number.
// - Math.exp(x): Returns the value of Ex (where E is Euler's number and x is the argument).
// - Math.PI, Math.E: Constants representing the mathematical constant π (pi) and Euler's number (e).


/*

Additional notes:

The Math object provides various mathematical operations and constants, making it useful for performing complex calculations in JavaScript.

Number methods such as toPrecision(), toLocaleString(), and toFixed() allow for formatting and manipulation of numerical values.

The Math.random() function generates pseudo-random numbers between 0 (inclusive) and 1 (exclusive), which can be scaled and manipulated to suit different needs.

The Math.floor() function is commonly used to round down floating-point numbers to the nearest integer, which is useful for generating random integers within a specific range.

Various trigonometric, logarithmic, and exponential functions are available in the Math object for advanced mathematical calculations.

*/