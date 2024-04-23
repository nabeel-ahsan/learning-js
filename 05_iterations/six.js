// const coding = ["js", "ruby", "java", "python", "cpp"]

// Using forEach method to iterate over each element of the 'coding' array
// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// Logging the result of forEach method which returns undefined as forEach doesn't return a value
// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Using filter method to create a new array containing elements greater than 4 from 'myNums'
// const newNums = myNums.filter( (num) => {
//     return num > 4
// } )

// Initializing an empty array 'newNums' to store filtered elements
// const newNums = []

// Using forEach method to iterate over each element of 'myNums'
// Pushing elements greater than 4 to the 'newNums' array
// myNums.forEach( (num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// } )

// Logging the filtered array 'newNums'
// console.log(newNums);

// Array of objects representing books
const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
    // More book objects...
];

// Filtering books where the genre is 'History'
let userBooks = books.filter( (bk) => bk.genre === 'History')

// Refiltering books where the publish year is greater than or equal to 1995 and the genre is 'History'
userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})

// Logging the filtered books
console.log(userBooks);


// The filter method is used to create a new array with elements that pass a test specified by a callback function.

// In the context of arrays, forEach is used for iterating over elements without modifying the original array, while filter is used for creating a new array with a subset of elements that meet certain criteria.

// When using filter, the callback function should return a boolean value indicating whether the current element should be included in the filtered array.

// In the provided example with books, the filter method is used to extract books with a specific genre and publish year range.