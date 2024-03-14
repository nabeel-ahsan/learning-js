// Define variables to simulate conditions
const isUserloggedIn = true;
const temperature = 41;

// Conditional statement using if-else
if (temperature === 40) {
    console.log("The temperature is 40 degrees.");
} else {
    console.log("The temperature is not 40 degrees.");
}

// Logical operators: <, >, <=, >=, ==, !=, ===, !==
// These operators are used to compare values and determine the flow of the program based on conditions.

// Example of using if-else statement with a single line of code (no curly braces)
const balance = 1000;
if (balance > 500) console.log("Balance is greater than 500.");

// Multiple conditions using else-if ladder
if (balance < 500) {
    console.log("Balance is less than 500.");
} else if (balance < 750) {
    console.log("Balance is less than 750.");
} else if (balance < 900) {
    console.log("Balance is less than 900.");
} else {
    console.log("Balance is greater than or equal to 900.");
}

// Conditional statements with logical operators (&&, ||)
const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// Checking multiple conditions using logical AND (&&) operator
// Only execute the block if all conditions are true
if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow the user to buy the course.");
}

// Checking multiple conditions using logical OR (||) operator
// Execute the block if any one condition is true
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User is logged in.");
}


/*

Additional Notes:

The if-else statement is used to execute a block of code based on a condition.

Multiple conditions can be checked using the else-if ladder, where each condition is evaluated sequentially until a true condition is found.

Logical operators (&&, ||) are used to combine multiple conditions in a single if statement.

It's important to understand the logical flow of conditions in if-else statements to control the execution of code effectively.

*/