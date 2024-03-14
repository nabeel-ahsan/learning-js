// switch (key) {  // Declares a switch statement with a variable 'key' to be evaluated
//     case value:
        
//         break;  // Breaks out of the switch block if the case matches

//     default:  // Default case executed if no case matches
//         break;  // Breaks out of the switch block in the default case
// }

const month = "march"  // Declares a constant variable 'month' and assigns the value "march"

switch (month) {  // Starts the switch statement using the value of 'month'
    case "jan":  // Case block for 'jan' month
        console.log("January");  // Prints "January" if 'month' is "jan"
        break;  // Exits the switch block after printing

    case "feb":  // Case block for 'feb' month
        console.log("feb");  // Prints "feb" if 'month' is "feb"
        break;  // Exits the switch block after printing

    case "march":  // Case block for 'march' month (matches!)
        console.log("march");  // Prints "march" if 'month' is "march"
        break;  // Exits the switch block after printing

    case "april":  // Case block for 'april' month
        console.log("april");  // This case won't be reached because 'month' is "march"
        break;  // Won't be executed in this example

    default:  // Default case block (won't be reached in this example)
        console.log("default case match");  // Prints this if no case matches
        break;  // Won't be executed in this example
}


/*

Important Points:

The switch statement evaluates a variable (key in the general form) and compares it against different case blocks.

Each case block checks for a specific value. If a match is found, the code within that block executes, and then break exits the switch statement.

The default case is a catch-all and executes if none of the case values match.

In this example, since month is "march", the case "march" block is executed, printing "march" and exiting the switch.

The default case and the case "april" block won't be reached in this example because there's a matching case before them.
Additional Notes:

You can have multiple statements within a case block.
switch statements are useful for handling multiple conditions based on a single variable.

Consider using an if statement chain if the logic involves more complex comparisons or if there are many cases.

*/