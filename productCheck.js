// productCheck.js
// This program prompts the user to enter integers until 'q' or 'Q' is entered.
// It echoes the numbers back, checks if any two numbers multiply to a third,
// and includes error handling.

const readline = require('readline');

// Setup for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numbers = [];

function askInput() {
  rl.question("Enter an integer or 'q' to quit: ", (input) => {
    // Check for quit
    if (input.toLowerCase() === 'q') {
      console.log("You entered the numbers:", numbers);

      // Check condition: a * b == c
      let conditionMet = false;
      for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
          if (i !== j) {
            let product = numbers[i] * numbers[j];
            if (numbers.includes(product)) {
              console.log(`Condition is met: ${numbers[i]} x ${numbers[j]} = ${product}`);
              conditionMet = true;
              break;
            }
          }
        }
        if (conditionMet) break;
      }

      if (!conditionMet) {
        console.log("Condition was not met");
      }

      rl.close();
      return;
    }

    // Validate input
    const parsed = parseInt(input);
    if (!isNaN(parsed)) {
      numbers.push(parsed);
      askInput();
    } else {
      console.log("Invalid input. Please enter an integer or 'q' to quit.");
      askInput();
    }
  });
}

// Start the input loop
askInput();