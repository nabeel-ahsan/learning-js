const myNums = [1, 2, 3]

// Using the reduce method to sum up all elements in the array.
// The reduce method takes a function as its first argument.
// This function takes two parameters: 'acc' (accumulator) and 'curr' (current value).
// The 'acc' parameter stores the accumulated value, while 'curr' represents the current element being processed.
// In this example, the arrow function adds the current value to the accumulator.
// The '0' at the end is the initial value of the accumulator.
// If omitted, the initial value defaults to the first element of the array.
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

// Logging the total sum of all elements in the array.
console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

// Using the reduce method to calculate the total price of all items in the shopping cart.
// The arrow function calculates the total by adding each item's price to the accumulator.
// The '0' at the end is the initial value of the accumulator.
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

// Logging the total price to pay for all items in the shopping cart.
console.log(priceToPay);


// The reduce method is used to apply a function to each element of the array, resulting in a single output value.

// The function provided to reduce takes four arguments: accumulator, currentValue, currentIndex, and array.

// In these examples, we are only using accumulator and currentValue.

// The initial value of the accumulator can be provided as the second argument to reduce. If omitted, the first element of the array is used as the initial value.

// reduce is a versatile method that can be used for various purposes, such as summing up values, calculating averages, or transforming data.