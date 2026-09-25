const secretNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
let won = false;

while (attempts < 7) {
    const answer = prompt("Guess a number between 1 and 100:");

    if (answer === null) {
        console.log("Game cancelled.");
        break;
    }

    const guess = Number(answer);

    if (isNaN(guess)) {
        alert("Please enter a valid number.");
        continue;
    }

    attempts++;

    if (guess > secretNumber) {
        alert("Too high!");
    } else if (guess < secretNumber) {
        alert("Too low!");
    } else {
        alert("Correct!");
        console.log("You got it in " + attempts + " guesses.");
        won = true;
        break;
    }
}

if (!won && attempts === 7) {
    console.log("You ran out of guesses.");
    console.log("The answer was " + secretNumber + ".");
}