// Step 1: Define the range of numbers
let low = 1;
let high = 10;

// Step 2: Generate a random number within the range
let correctAns = Math.floor(Math.random() * (high - low + 1)) + low;

// Step 3: Initialize a variable to keep track of the number of attempts
let attempts = 0;

// Step 4: Create a loop to allow the user three chances
for (attempts = 1; attempts <= 3; attempts++) {
    // Step 5: Ask the user for their guess
    let userGuess = parseInt(prompt("Guess a number between " + low + " and " + high));

    // Step 6: Check if the user's guess is correct
    if (userGuess === correctAns) {
        alert("You Win!");
        break; // Exit the loop if the guess is correct
    } else if (userGuess < correctAns) {
        alert("Correct answer is greater!");
    } else {
        alert("Correct answer is smaller!");
    }
}

// Step 7: Check if the user lost after three attempts
if (attempts > 3) {
    alert("You Lose! The correct answer was " + correctAns);
}
