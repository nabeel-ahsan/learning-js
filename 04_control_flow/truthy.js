const userEmail = []  // Declares a constant array `userEmail` but initializes it as empty

if (userEmail) {  // Checks if `userEmail` is truthy (not null, undefined, empty string, 0, etc.)
    console.log("Got user email");  // This won't be executed because `userEmail` is empty (falsy)
} else {
    console.log("Don't have user email");  // This will be executed because `userEmail` is empty
}

// Falsy values are:
// false, 0, -0, BigInt(0n), "", null, undefined, NaN

// Truthy values are (almost) everything else:
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {  // More explicit check for empty array
//     console.log("Array is empty");
// }

const emptyObj = {}  // Declares a constant object `emptyObj` and initializes it as empty

if (Object.keys(emptyObj).length === 0) {  // Checks if the object's key count is 0 (empty)
    console.log("Object is empty");  // This will be executed because `emptyObj` has no keys
}

// Nullish Coalescing Operator (??)

let val1;
// val1 = 5 ?? 10  // Assigns 5 (truthy) to val1
// val1 = null ?? 10  // Assigns 10 (because null is nullish)
// val1 = undefined ?? 15  // Assigns 15 (because undefined is nullish)
val1 = null ?? 10 ?? 20;  // Assigns 10 (null is nullish, 10 is truthy)

console.log(val1);  // This will print 10

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");  // This will print "more than 80"

// Important points:
// * Empty arrays and objects are considered falsy values in JavaScript.
// * The nullish coalescing operator (??) checks if a value is nullish (null or undefined) and if so, assigns the value after the ?? operator.
// * The ternary operator provides a shorthand way to write if-else statements.
