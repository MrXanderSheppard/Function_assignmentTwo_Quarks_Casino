let hasGameStarted = false; // Track if the game has started

// Function to simulate the Craps game
function playCraps() {
    // Generate two random dice rolls between 1 and 6
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;

    // Calculate the sum of the dice rolls
    const sum = die1 + die2;

    // Get the result elements
    const diceResultsElement = document.getElementById('diceResults');
    const gameOutcomeElement = document.getElementById('gameOutcome');

    // Display the dice results
    diceResultsElement.innerHTML = `You rolled: ${die1} and ${die2}`;

    if (hasGameStarted) {
        if (sum === 7 || sum === 11) {
            // If the sum is 7 or 11, you lose
            gameOutcomeElement.innerHTML = "CRAPS - You lose!";
        } else if (die1 === die2 && die1 % 2 === 0) {
            // If it's a double and even, you win
            gameOutcomeElement.innerHTML = "You won!";
        } else {
            // Otherwise, you pushed
            gameOutcomeElement.innerHTML = "You pushed!";
        }

        // Disable the roll button after the game is over
        document.getElementById('rollButton').disabled = true;
    } else {
        // If the game hasn't started yet, set the flag to true
        hasGameStarted = true;
    }
}

// Function to be called when the button is clicked to roll the dice
function rollDice() {
    // Call the playCraps function to play the game
    playCraps();
}

// Add an event listener to the roll button to start the game when clicked
const rollButton = document.getElementById('rollButton');
rollButton.addEventListener('click', rollDice);
