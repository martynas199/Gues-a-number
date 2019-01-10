let randomNumber = Math.floor(Math.random() * 100) + 1;

var remainingAttempts = 10;

const rem = document.querySelector(".remainingGuesses");
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lucky = document.querySelector(".lucky");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector(".guessField");


let guessCount = 1;
let resetButton;
guessField.focus();


function checkGuess() {
    let userGuess = Number(guessField.value);

    const rem = document.querySelector(".remainingGuesses");

    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ", ";

    if (userGuess === randomNumber) {
        remainingAttempts--;
        lastResult.textContent = 'Congratulations! The lucky number is ' + randomNumber;
        // lucky.textContent += randomNumber;
        lastResult.style.backgroundColor = 'green';
        rem.style.backgroundColor = 'green';
        lowOrHi.textContent = "";
        setGameOver();
    } else if (guessCount === 10) {
        remainingAttempts = 0;
        rem.textContent = 0;
        lastResult.textContent = '!!!GAME OVER!!!';
        setGameOver();


    } else {
        lastResult.textContent = "Wrong, Try Again";
        lastResult.style.backgroundColor = "red";
        remainingAttempts--;

        if (userGuess < randomNumber) {
            lowOrHi.textContent = 'Last guess was too low!';

        } else if (userGuess > randomNumber) {
            lowOrHi.textContent = "Last guess was too high!";
        }
    }


    remainingAttempts;
    rem.innerHTML = remainingAttempts;
    rem.style.padding = "2px 5px 2px 6px";

    guessCount++;
    guessField.value = "";
    guessField.focus();
}


guessField.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        validate(e);
    }
});

function validate(e) {
    checkGuess();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    guessSubmit.classList.add('display');
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    resetButton.classList.add("bubbly-button");
    document.querySelector(".cont").appendChild(resetButton);
    resetButton.addEventListener("click", resetGame);
}

function resetGame() {
    guessCount = 1;
    const resetParas = document.querySelectorAll(".resultParas p");
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = "";
    }
    remainingAttempts = 0;
    rem.textContent = 10;
    document.querySelector(".cont").removeChild(resetButton);
    guessSubmit.classList.remove("display");
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();
    remainingAttempts = 10;

    lastResult.style.backgroundColor = "transparent";

    randonNumber = Math.floor(Math.random() * 100) + 1;
}
