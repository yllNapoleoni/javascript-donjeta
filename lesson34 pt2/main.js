let secretNumber;
let attemptsLeft;
let isGameOver = false;

const userGuessInput = document.getElementById('userGuess');
const submitButton = document.getElementById('submitGuess');
const messageDisplay = document.getElementById('message');
const attemptsDisplay = document.getElementById('attempts');
const resetButton = document.getElementById('resetButton');

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  isGameOver = false;

  userGuessInput.value = '';
  messageDisplay.textContent = '';
  attemptsDisplay.textContent = `Attempts left: ${attemptsLeft}`;
  resetButton.style.display = 'none';
  submitButton.disabled = false;
}

function checkGuess() {
  if (isGameOver) return;

  const userGuess = Number(userGuessInput.value);
  
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    messageDisplay.textContent = 'Please enter a number between 1 and 100.';
    return;
  }

  attemptsLeft--;
  attemptsDisplay.textContent = `Attempts left: ${attemptsLeft}`;

  if (userGuess === secretNumber) {
    messageDisplay.textContent = 'Congratulations! You guessed the number!';
    endGame();
  } else if (userGuess < secretNumber) {
    messageDisplay.textContent = 'Too low! Try again.';
  } else {
    messageDisplay.textContent = 'Too high! Try again.';
  }

  if (attemptsLeft === 0 && !isGameOver) {
    messageDisplay.textContent = `Game over! The number was ${secretNumber}.`;
    endGame();
  }
}

function endGame() {
  isGameOver = true;
  submitButton.disabled = true;
  resetButton.style.display = 'inline-block';
}

resetButton.addEventListener('click', startGame);
submitButton.addEventListener('click', checkGuess);

startGame();
