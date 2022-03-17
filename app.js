console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Function that takes one parameter, count, and uses a loop and selection statement to count to the number passed in, printing out the odd numbers.

function printOdds(count) {
    for (let i = 1; i < count; i++) {
        if (i % 2 == 1) {
            console.log(i);
        } else {
            continue;
        }
    }
}
console.log(printOdds(17));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

// Function that receives a name and age, and prints a greeting message to the console using the name

function checkAge(age, userName) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16!`;
    if (age >=16) {
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }
}
console.log(checkAge(30, "Samiisweets"));