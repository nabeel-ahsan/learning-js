// Important Concepts of Arrays and Objects in JavaScript

// Arrays
// 1. Define an array
const myArr = [1, 2, 3, 4, 5];

// 2. Accessing elements
console.log(myArr[0]); // Output: 1

// 3. Modifying elements
myArr.push(6); // Add element at the end
myArr.pop();   // Remove element from the end
myArr.unshift(0); // Add element at the beginning
myArr.shift();    // Remove element from the beginning

// 4. Array methods
console.log(myArr.includes(3)); // Check if array contains a value
console.log(myArr.indexOf(2));  // Find index of a value
console.log(myArr.join());      // Convert array to string
console.log(myArr.slice(1, 3)); // Extract a portion of the array
console.log(myArr.splice(1, 2)); // Remove elements from the array

// Objects
// 1. Define an object
const myObj = { 
    name: "John", 
    age: 30, 
    city: "New York" 
};

// 2. Accessing properties
console.log(myObj.name); // Output: John

// 3. Modifying properties
myObj.age = 31;

// 4. Object methods
console.log(Object.keys(myObj));   // Get an array of object keys
console.log(Object.values(myObj)); // Get an array of object values
console.log(Object.entries(myObj)); // Get an array of key-value pairs

// Advanced Concepts
// 1. Spread operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2]; // Merge arrays

// 2. Destructuring assignment
const { name, age } = myObj; // Extract properties into variables

// 3. Object methods
const newObj = Object.assign({}, myObj); // Clone an object

// 4. Nested objects and arrays
const nestedObj = {
    key: "value",
    innerObj: {
        nestedKey: "nestedValue"
    },
    nestedArray: [1, 2, 3]
};

// 5. Symbols
const mySym = Symbol("unique");
const symObj = {
    [mySym]: "symbolValue"
};

// Summary
console.log("Array Summary:", myArr);
console.log("Object Summary:", myObj);
console.log("Advanced Concepts:", mergedArray, name, age, newObj, nestedObj, symObj);
