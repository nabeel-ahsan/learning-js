const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Using the map method to create a new array where each element is multiplied by 10
// const newNums = myNumers.map( (num) => { return num + 10})

// Using method chaining:
// 1. First map: Multiply each element of 'myNumers' array by 10
// 2. Second map: Add 1 to each element of the previously mapped array
// 3. Filter: Keep only the elements that are greater than or equal to 40
const newNums = myNumers
                .map((num) => num * 10 ) // Multiply each element by 10
                .map( (num) => num + 1) // Add 1 to each element
                .filter( (num) => num >= 40) // Keep only elements greater than or equal to 40

// Logging the resulting array after mapping and filtering operations
console.log(newNums);


// The map method is used to create a new array with the results of calling a provided function on every element in the calling array.

// Method chaining allows multiple array methods to be applied sequentially to the same array.

// In this example, each element in the original array is first multiplied by 10, then 1 is added to each element, and finally, elements less than 40 are filtered out.

// The resulting array contains elements that are the result of multiplying each original element by 10, adding 1 to each result, and filtering out elements less than 40.