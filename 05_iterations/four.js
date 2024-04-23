const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// Iterating over the keys of 'myObject' using a for...in loop
for (const key in myObject) {
    // Logging each key-value pair of 'myObject'
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

// Iterating over the indices of the 'programming' array using a for...in loop
for (const key in programming) {
    // Logging each element of the 'programming' array
    // console.log(programming[key]);
}

// Note: The following code will not work as expected because for...in loop is not intended for iterating over Map objects
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// Iterating over the keys of a Map object using a for...in loop (commented out)
// for (const key in map) {
//     console.log(key);
// }


// The for...in loop is used to iterate over the properties (keys) of an object.

// When used with an array, for...in loop iterates over the indices (keys) of the array, not the elements themselves. This behavior can be unexpected.

// It's important to note that for...in loop is not suitable for iterating over Map objects as it may not work as expected. Instead, prefer using for...of loop or the Map.prototype.forEach() method for iterating over Map keys and values.
