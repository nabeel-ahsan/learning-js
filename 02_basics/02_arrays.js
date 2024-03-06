// Define an array named marvel_heros containing Marvel superhero names
const marvel_heros = ["thor", "Ironman", "spiderman"];

// Define an array named dc_heros containing DC superhero names
const dc_heros = ["superman", "flash", "batman"];

// Add the entire dc_heros array as a single element to the marvel_heros array
// marvel_heros.push(dc_heros)

// Log the marvel_heros array, which now includes dc_heros as a single nested array element
// console.log(marvel_heros);

// Access the second element of the nested array within marvel_heros
// console.log(marvel_heros[3][1]);

// Concatenate the marvel_heros and dc_heros arrays to create a new array allHeros
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// Create a new array all_new_heros by spreading the elements of marvel_heros and dc_heros
const all_new_heros = [...marvel_heros, ...dc_heros]

// Log the new array all_new_heros containing elements from both marvel_heros and dc_heros
// console.log(all_new_heros);

// Define an array containing nested arrays and individual elements
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// Flatten the nested arrays in another_array using flat method with Infinity depth
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

// Check if the given value is an array
console.log(Array.isArray("Hitesh"))

// Convert a string into an array where each character becomes an element
console.log(Array.from("Hitesh"))

// Convert an object into an array, where each key-value pair becomes an element
console.log(Array.from({name: "hitesh"})) // interesting

// Create a new array using Array.of with given values
let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));

/*

Additional Notes:

Array.from(): Converts array-like objects or iterable objects (such as strings, maps, sets, etc.) into true arrays.

Array.of(): Creates a new Array instance with a variable number of arguments, regardless of the number or type of the arguments.

flat(depth): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. If no depth is provided, it defaults to 1. Using Infinity as the depth flattens all nested arrays to any depth.

*/