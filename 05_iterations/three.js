// Using for...of loop to iterate over each element of the array 'arr'
const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
    // Logging each element of the array 'arr'
    // console.log(num);
}

// Using for...of loop to iterate over each character of the string 'greetings'
const greetings = "Hello world!";
for (const greet of greetings) {
    // Logging each character of the string 'greetings'
    // console.log(`Each char is ${greet}`);
}

// Creating a new Map object 'map' and setting key-value pairs
const map = new Map();
map.set('IN', "India");
map.set('USA', "United States of America");
map.set('Fr', "France");
map.set('IN', "India"); // Overwriting the value for the key 'IN'

// Iterating over the key-value pairs of the Map 'map' using for...of loop
for (const [key, value] of map) {
    // Logging each key-value pair of the Map 'map'
    // console.log(key, ':-', value);
}

// Creating an object 'myObject' with key-value pairs
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// Note: The following code will throw an error because objects are not iterable
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }


// The for...of loop is used to iterate over iterable objects like arrays, strings, and Map objects.

// It provides a simpler syntax compared to traditional for loops when working with collections.

// When iterating over a Map object, each element returned by the iterator is an array containing the key-value pair.

// However, for...of loop cannot be used directly with regular objects (non-iterable objects).
