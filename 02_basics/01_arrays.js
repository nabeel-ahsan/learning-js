// Define an array named myArr with some integer elements
const myArr = [0, 1, 2, 3, 4, 5];

// Define another array named myHeroes with string elements
const myHeroes = ["shaktiman", "naagraj"];

// Create a new array named myArr2 using the Array constructor with elements 1, 2, 3, and 4
const myArr2 = new Array(1, 2, 3, 4);

// Log the element at index 1 of myArr
// console.log(myArr[1]);

// Array methods

// Add element 6 to the end of myArr
// myArr.push(6)

// Add element 7 to the end of myArr
// myArr.push(7)

// Remove the last element from myArr
// myArr.pop()

// Add element 9 to the beginning of myArr
// myArr.unshift(9)

// Remove the first element from myArr
// myArr.shift()

// Check if myArr includes the element 9
// console.log(myArr.includes(9));

// Find the index of the element 3 in myArr
// console.log(myArr.indexOf(3));

// Convert myArr to a string separated by commas
// const newArr = myArr.join()

// Log the original array myArr
// console.log(myArr);

// Log the new string representation of myArr
// console.log( newArr);


// slice, splice

// Log the original array myArr
console.log("A ", myArr);

// Create a new array myn1 by slicing elements from index 1 to 2 (excluding 3) from myArr
const myn1 = myArr.slice(1, 3)

// Log the new array myn1
console.log(myn1);

// Log the original array myArr
console.log("B ", myArr);

// Create a new array myn2 by removing 3 elements starting from index 1 from myArr
const myn2 = myArr.splice(1, 3)

// Log the original array myArr after splice
console.log("C ", myArr);

// Log the removed elements stored in myn2
console.log(myn2);

/*
Additional Notes:

slice(start, end): Returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array.

splice(start, deleteCount, item1, item2, ...): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It modifies the original array and returns an array containing the deleted elements.

JavaScript arrays are zero-indexed, meaning the first element is at index 0, the second at index 1, and so on.

Arrays in JavaScript are versatile data structures that can hold elements of different types and can dynamically adjust their size.

*/