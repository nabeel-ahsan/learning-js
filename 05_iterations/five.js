const coding = ["js", "ruby", "java", "python", "cpp"];

// Using forEach method to iterate over each element of the 'coding' array
// Logging each element using an anonymous function
// coding.forEach( function (val){
//     console.log(val);
// } )

// Using forEach method with an arrow function to iterate over each element of the 'coding' array
// Logging each element using an arrow function
// coding.forEach( (item) => {
//     console.log(item);
// } )

// Defining a named function 'printMe' to log each element
// function printMe(item){
//     console.log(item);
// }

// Using forEach method with a named function 'printMe' to iterate over each element of the 'coding' array
// coding.forEach(printMe)

// Using forEach method with an arrow function to log each element along with its index and the array itself
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// Using forEach method with an arrow function to iterate over each object in the 'myCoding' array
// Logging the 'languageName' property of each object
myCoding.forEach( (item) => {
    console.log(item.languageName);
} )


// The forEach method is used to iterate over arrays and execute a provided function once for each array element.

// It is commonly used for executing side effects such as logging or updating variables for each element of an array.

// Arrow functions are often used as callback functions with forEach due to their concise syntax.

// When iterating over an array of objects, forEach allows accessing object properties within the callback function to perform specific tasks on each object.