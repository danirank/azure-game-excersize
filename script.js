let secretNumber = Math.floor(Math.random() * 100) + 1;
let numberOfGuesses = 0;

const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");
const result = document.getElementById("result");
const attempts = document.getElementById("attempts");

guessButton.addEventListener("click", checkGuess);

function checkGuess() {
    const guess = Number(guessInput.value);

    if (!guess || guess < 1 || guess > 100) {
        result.textContent = "Wrong format, write a number between 1 and 100.";
        return;
    }

    numberOfGuesses++;

    if (guess < secretNumber) {
        result.textContent = "Too low! Try again.";
    }
    else if (guess > secretNumber) {
        result.textContent = "Too high! Try again.";
    }
    else {
        result.textContent = `Congrats! You made it in ${numberOfGuesses} tries.`;
    }

    attempts.textContent = `Attempts: ${numberOfGuesses}`;
    guessInput.value = "";
}