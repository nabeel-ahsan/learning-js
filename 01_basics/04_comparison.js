// Comparison Operators: These operators compare two values and return a boolean result.
// console.log(2 > 1); // Output: true - Checks if 2 is greater than 1.
// console.log(2 >= 1); // Output: true - Checks if 2 is greater than or equal to 1.
// console.log(2 < 1); // Output: false - Checks if 2 is less than 1.
// console.log(2 == 1); // Output: false - Checks if 2 is equal to 1.
// console.log(2 != 1); // Output: true - Checks if 2 is not equal to 1.

// JavaScript Type Coercion: When comparing values of different types, JavaScript tries to convert them to the same type before making the comparison.
// console.log("2" > 1); // Output: true - The string "2" is converted to a number before comparison.
// console.log("02" > 1); // Output: true - Leading zeros are ignored when converting a string to a number.

// Special Cases with null and undefined:
console.log(null > 0); // Output: false - null is converted to 0 during comparison, and 0 is not greater than 0.
console.log(null == 0); // Output: false - null is only loosely equal to undefined, not to any other value.
console.log(null >= 0); // Output: true - null is considered greater than or equal to 0 due to type coercion.

console.log(undefined == 0); // Output: false - undefined is only loosely equal to null or itself, not to any other value.
console.log(undefined > 0); // Output: false - undefined cannot be compared to a number.
console.log(undefined < 0); // Output: false - undefined cannot be compared to a number.

// Strict Equality Operator (===): Compares both value and type without any type conversion.
console.log("2" === 2); // Output: false - "2" is a string and 2 is a number, and they are of different types.


/*

Additional notes:

JavaScript's loose equality operator (==) performs type coercion, converting values of different types to the same type before comparison.

null loosely equals only undefined and itself, not to any other value.
undefined is not directly comparable to numbers or other non-null values.

The strict equality operator (===) checks for both value and type equality without performing type conversion.

*/