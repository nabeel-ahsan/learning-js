// VARIABLES:

let name = "John"; // Declaration and assignment of variables.
const age = 30; // Declaration of constant variables.

// - Variables are used to store and manipulate data in JavaScript.
// - Declared using keywords like const, let, or var.
// - const: Immutable variable, let: Mutable variable, var: Older way to declare variables (avoided due to scope issues).



// DATA TYPES:

// Primitive Data Types:
// String
let greetings = "Hello, world!";
// Number
let score = 100;
// Boolean
let isLoggedIn = true;
// Null
let user = null;
// Undefined
let city;
// Symbol
let id = Symbol("unique");
// BigInt
let bigNumber = 100n;

// Examples of Non-Primitive Data Types:
// Array
let fruits = ["apple", "banana", "orange"];
// Object
let person = {
    name: "John",
    age: 30,
};
// Function
function greet() {
    console.log("Hello, world!");
}

// - JavaScript has primitive and non-primitive (reference) data types.
// - Primitive types include String, Number, Boolean, null, undefined, Symbol, and BigInt.
// - Non-primitive types include Array, Object, and Function.



// CONVERSION OPERATIONS:

// String to Number
let strNumber = "123";
let convertedNumber = Number(strNumber);
// Number to String
let num = 123;
let convertedString = String(num);
// Boolean to Number
let isLoggedIn1 = true;
let numLoggedIn = Number(isLoggedIn1);

// - Type conversion can be explicit or implicit in JavaScript.
// - Explicit conversion: Using functions like Number(), String(), Boolean(), etc.
// - Implicit conversion: Automatically performed by JavaScript when types mismatch in operations.



// COMPARISONS:

// Comparison Operators
let x = 5;
let y = 10;
let result = x < y;
// Strict Equality Operator
let a = 5;
let b = "5";
let isEqual = a === b;

// - Comparison operators (>, <, >=, <=, ==, !=) are used to compare values.
// - JavaScript performs type coercion when comparing different types.
// - Strict equality operator (===) checks both value and type without coercion.



// STRINGS:

// String Concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
// String Length
let message = "Hello, world!";
let length = message.length;
// String Methods
let text = "Hello, world!";
let upperCaseText = text.toUpperCase();

// - Strings represent textual data and are enclosed in quotes (single or double).
// - Various string methods for manipulation like toUpperCase(), toLowerCase(), concat(), etc.
// - Template literals (`${variable}`) for string interpolation and easier formatting.



// NUMBERS AND MATHS:

// Math Functions
let number = -4.6;
let absoluteValue = Math.abs(number);
// Random Number Generation
let randomNumber = Math.random();

// - Numbers can be integers or floating-point numbers.
// - Math object provides mathematical functions and constants (Math.abs(), Math.max(), etc.).
// - Random number generation using Math.random().



// DATES:

// Creating Date Objects
let currentDate = new Date();
// Date Formatting
let formattedDate = currentDate.toDateString();

// - Dates represent points in time and are created using the Date object.
// - Methods like getFullYear(), getMonth(), getDay() for date manipulation.
// - Date formatting with toLocaleString(), toISOString(), etc.



// DATATYPES SUMMARY:
// - Primitive types are stored directly in memory (stack), while non-primitive types are stored by reference (heap).
// - Primitive types include single values like strings, numbers, booleans, etc.
// - Non-primitive types include complex data structures like arrays, objects, and functions.
// - Understanding the distinction helps in memory management and avoiding unexpected behavior.


