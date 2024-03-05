// Dates: Represent points in time, measured in milliseconds since the Unix epoch (January 1, 1970).

let myDate = new Date(); // Create a new Date object representing the current date and time.
// console.log(myDate.toString()); // Output: Displays the date and time as a string.
// console.log(myDate.toDateString()); // Output: Displays the date portion of the Date object as a human-readable string.
// console.log(myDate.toLocaleString()); // Output: Displays the date and time in a localized format based on the browser's locale.
// console.log(typeof myDate); // Output: "object" - Indicates that 'myDate' is an object.
// console.log(myDate.toISOString); // Output: [Function: toISOString] - Represents the date and time in ISO 8601 format.
// console.log(myDate.toJSON); // Output: [Function: toJSON] - Returns a string representation of the Date object in JSON format.
// console.log(myDate.toTimeString); // Output: [Function: toTimeString] - Represents the time portion of the Date object as a string.

// Creating Date Objects:
// let myCreatedDate = new Date(2023, 0, 23); // Create a Date object representing January 23, 2023.
// let myCreatedDate = new Date(2023, 0, 23, 5, 3); // Create a Date object representing January 23, 2023, 5:03 AM.
// let myCreatedDate = new Date("2023-01-14"); // Create a Date object representing January 14, 2023, using a string format.
let myCreatedDate = new Date("01-14-2023"); // Create a Date object representing January 14, 2023, using a different string format.
// console.log(myCreatedDate.toLocaleString()); // Output: Displays the created date in a localized format.

let myTimeStamp = Date.now(); // Get the current timestamp in milliseconds since the Unix epoch.
// console.log(myTimeStamp); // Output: Displays the current timestamp.

// Date Methods:
// console.log(myCreatedDate.getTime()); // Output: Returns the number of milliseconds since the Unix epoch.
// console.log(Math.floor(Date.now()/1000)); // Output: Returns the current timestamp in seconds since the Unix epoch.

let newDate = new Date(); // Create a new Date object representing the current date and time.
console.log(newDate); // Output: Displays the current date and time.
console.log(newDate.getMonth() + 1); // Output: Returns the month component of the date (0-indexed, so add 1 to get the actual month).
console.log(newDate.getDay()); // Output: Returns the day of the week (0 for Sunday, 1 for Monday, and so on).

// Additional Options for Date Formatting:
newDate.toLocaleString('default', {
    weekday: "long", // Specify the display of the weekday as the full name.
})


/*

    Additional notes:

JavaScript's Date object provides a variety of methods for working with dates and times.

Date objects can be created using various constructors, allowing flexibility in specifying dates and times.

Commonly used methods include getTime() to get the timestamp in milliseconds, getMonth() to get the month component, and getDay() to get the day of the week.

Date formatting can be customized using the toLocaleString() method with additional options provided in the second parameter.

 */