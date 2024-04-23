// Using a for loop to iterate from 0 to 10
for (let i = 0; i <= 10; i++) {
    const element = i; // Storing the current value of the loop counter in a variable
    if (element == 5) {
        // Logging a message if the current value is 5 (commented out)
    }
    // Logging the current value of the loop counter
}

// Attempting to log the value of 'element' outside the loop (commented out)
// Note: 'element' is scoped to the for loop and not accessible outside it

// Using nested for loops to create a multiplication table
for (let i = 1; i <= 10; i++) {
   for (let j = 1; j <= 10; j++) {
       // Logging the value of 'i' and 'j' for each iteration of the inner loop
       // Calculating and logging the multiplication of 'i' and 'j'
   }
}

// Creating an array of superhero names
let myArray = ["flash", "batman", "superman"]

// Iterating over the array using a for loop
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index]; // Accessing each element of the array
    // Logging each element of the array
}

// Using a for loop with break to exit the loop when a condition is met
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         Logging a message and exiting the loop if the loop counter is 5 (commented out)
//     }
// }

// Using a for loop with continue to skip an iteration when a condition is met
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`); // Logging a message when the loop counter is 5
        continue; // Skipping the current iteration and proceeding with the next one
    }
   console.log(`Value of i is ${index}`); // Logging the loop counter for each iteration
}

// The for loop is a fundamental looping construct in JavaScript used for repetitive tasks.

// Nested for loops are useful for tasks requiring multiple iterations, such as generating tables or working with multidimensional arrays.

// The break statement terminates the loop prematurely when a condition is met, while the continue statement skips the current iteration and proceeds to the next one.

// Always ensure correct scoping when accessing variables declared inside loops to avoid scope-related issues.