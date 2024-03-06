// Initialize an empty object named tinderUser using object literal syntax
const tinderUser = {}

// Add properties to the tinderUser object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// Define an object named regularUser with nested properties
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// Access the firstname property nested within fullname object of regularUser
// console.log(regularUser.fullname.userfullname.firstname);

// Define three separate objects obj1, obj2, and obj4
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// Merge the properties of obj1 and obj2 into a new object obj3 using spread syntax
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// Define an array named users containing three objects with id and email properties
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// Access the email property of the second object in the users array
users[1].email
// console.log(tinderUser);

// Retrieve an array of keys from the tinderUser object
// console.log(Object.keys(tinderUser));

// Retrieve an array of values from the tinderUser object
// console.log(Object.values(tinderUser));

// Retrieve an array of key-value pairs from the tinderUser object
// console.log(Object.entries(tinderUser));

// Check if the tinderUser object has a property named 'isLoggedIn'
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

// Define an object named course with properties coursename, price, and courseInstructor
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// Destructure the course object to extract the courseInstructor property with an alias instructor
const {courseInstructor: instructor} = course

// Log the value of the instructor variable
// console.log(courseInstructor);
console.log(instructor);


/*

Additional Notes:

Object literals in JavaScript allow you to define and create objects using a simplified notation.

Object properties can be accessed using dot notation (object.property) or square bracket notation (object['property']).

Spread syntax (...) allows for shallow copying of object properties or merging of objects.

Destructuring assignment allows you to extract multiple properties from objects and assign them to variables with concise syntax.

Object.keys(), Object.values(), and Object.entries() are methods used to extract keys, values, and key-value pairs from objects, respectively.

The hasOwnProperty() method is used to check if an object has a specific property.

*/