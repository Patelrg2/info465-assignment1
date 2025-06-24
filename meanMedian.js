const readlineSync = require("readline-sync");

// Function to calculate the mean
function calculateMean(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

// Function to calculate the median
function calculateMedian(numbers) {
    const sorted = [...numbers].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        return sorted[mid];
    }
}

let numbers = [];

console.log("Enter integers one at a time. Type 'q' to quit.");

while (true) {
    let input = readlineSync.question("Enter a number or 'q' to quit: ");

    if (input.toLowerCase() === 'q') {
        break;
    }

    let number = parseInt(input);

    if (isNaN(number)) {
        console.log("Invalid input. Please enter an integer.");
    } else {
        numbers.push(number);
    }
}

if (numbers.length === 0) {
    console.log("No numbers entered. Exiting.");
} else {
    const mean = calculateMean(numbers);
    const median = calculateMedian(numbers);

    console.log(`Numbers entered: ${numbers}`);
    console.log(`Mean: ${mean}`);
    console.log(`Median: ${median}`);
}
