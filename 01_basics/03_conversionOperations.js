let score = "John"; // Declare a variable 'score' and assign it the string value "John".

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score); // Convert the value of 'score' to a number.
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "John"; // Declare a variable 'isLoggedIn' and assign it the string value "John".

let booleanIsLoggedIn = Boolean(isLoggedIn); // Convert the value of 'isLoggedIn' to a boolean.
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33; // Declare a variable 'someNumber' and assign it the numerical value 33.

let stringNumber = String(someNumber); // Convert the value of 'someNumber' to a string.
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3; // Declare a variable 'value' and assign it the numerical value 3.
let negValue = -value; // Assign the negation of 'value' to 'negValue'.
// console.log(negValue);

// Arithmetic Operations
// console.log(2+2);  // 4
// console.log(2-2);  // 0
// console.log(2*2);  // 4
// console.log(2**3); // 8
// console.log(2/3);  // 0.6666666
// console.log(2%3);  // 2

let str1 = "hello"; // Declare a variable 'str1' and assign it the string value "hello".
let str2 = " John"; // Declare a variable 'str2' and assign it the string value " John".

let str3 = str1 + str2; // Concatenate 'str1' and 'str2' and store the result in 'str3'.
// console.log(str3);

// String Concatenation
// console.log("1" + 2); // "12"
// console.log(1 + "2"); // "12"
// console.log("1" + 2 + 2); // "122"
// console.log(1 + 2 + "2"); // "32"

// Operator Precedence
// console.log( (3 + 4) * 5 % 3);

// Unary Plus Operator
// console.log(+true); // 1
// console.log(+"");

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2; // Assign the value of 2 + 2 to 'num1', 'num2', and 'num3'.

let gameCounter = 100; // Declare a variable 'gameCounter' and assign it the numerical value 100.
++gameCounter; // Increment the value of 'gameCounter' by 1.
console.log(gameCounter);

// Link to study: The provided link directs to the ECMAScript specification for understanding type conversions.
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion

/*

Additional notes:

The Number(), String(), and Boolean() functions are used to convert values between different data types.

JavaScript automatically performs type conversion in certain situations, such as concatenating strings with numbers.

Understanding operator precedence is crucial for correctly interpreting complex expressions.

The unary plus operator (+) can be used to convert boolean values to numbers, with true converting to 1 and false converting to 0.

*/
