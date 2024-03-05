const name = "hitesh"; // Declare a constant variable 'name' and assign it the string value "hitesh".
const repoCount = 50; // Declare a constant variable 'repoCount' and assign it the numerical value 50.

// Template Literals: Allow embedding expressions inside strings using `${}` syntax.
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com'); // Create a string object using the String constructor.

// String Methods:
// console.log(gameName[0]); // Output: "h" - Access the character at index 0.
// console.log(gameName.__proto__); // Output: Shows the prototype of the string object.

// console.log(gameName.length); // Output: 14 - Returns the length of the string.
// console.log(gameName.toUpperCase()); // Output: "HITESH-HC-COM" - Converts the string to uppercase.
console.log(gameName.charAt(2)); // Output: "t" - Returns the character at the specified index.
console.log(gameName.indexOf('t')); // Output: 2 - Returns the index of the first occurrence of the specified substring.

const newString = gameName.substring(0, 4); // Extracts characters from a string, between two specified indices.
console.log(newString); // Output: "hite"

const anotherString = gameName.slice(-8, 4); // Extracts a section of a string and returns it as a new string.
console.log(anotherString); // Output: "" - Negative indices count from the end of the string.

const newStringOne = "   hitesh    ";
console.log(newStringOne);
console.log(newStringOne.trim()); // Removes whitespace from both ends of a string.

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-')); // Output: "https://hitesh.com/hitesh-choudhary" - Replaces all occurrences of a specified substring with another substring.

console.log(url.includes('sundar')); // Output: false - Checks if a string contains a specified substring.

console.log(gameName.split('-')); // Output: ["hitesh", "hc", "com"] - Splits a string into an array of substrings using a specified separator.

// Additional String Methods:
// - concat(): Concatenates two or more strings.
// - padStart(length, padString): Pads the current string with another string until the resulting string reaches the given length.
// - padEnd(length, padString): Pads the current string with another string until the resulting string reaches the given length, appending the padding to the end.
// - repeat(count): Returns a new string with a specified number of copies of the string concatenated together.
// - startsWith(searchString): Checks whether a string starts with the specified characters.
// - endsWith(searchString): Checks whether a string ends with the specified characters.
// - substring(indexStart, indexEnd): Extracts characters from a string, between two specified indices.
// - trimStart(): Removes whitespace from the beginning of a string.
// - trimEnd(): Removes whitespace from the end of a string.
// - match(regexp): Retrieves the matches when matching a string against a regular expression.


/*

Additional notes:

Template literals provide a cleaner and more readable way to include variables and expressions within strings compared to concatenation.

String methods allow for various operations and manipulations on strings, enhancing their usefulness and flexibility.

The String constructor new String('string') creates a string object, which behaves differently from primitive strings and has access to prototype methods. In most cases, primitive strings (e.g., "string") are preferred over string objects.

String manipulation methods like substring(), slice(), and replace() offer powerful ways to modify string content.

The trim() method is commonly used to sanitize user inputs by removing leading and trailing whitespace.

String methods like split() are handy for parsing strings into arrays or extracting substrings based on delimiters.

*/