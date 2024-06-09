const Confirm = document.querySelector("#subt");
const form = document.querySelector("form");
const guessedArr = document.querySelector(".guesses");
const inp = document.querySelector("#guessField");
const RemGuess = document.querySelector(".lastResult");
const lowOrHig = document.querySelector(".lowOrHi");
const resultParas = document.querySelector(".resultParas");
const randomNumber = parseInt(Math.floor(Math.random() * 100 + 1));

console.log(randomNumber);

let prevGuess = [];
let playGame = true; // To start the game
let numOfguessed = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (playGame) {
    const guess = parseInt(document.querySelector(".guessField").value);
    validateTheGuess(guess);
  }
});

function validateTheGuess(guess) {
  if (isNaN(guess) || guess === "") {
    alert("Please Enter a valid Number");
  } else if (guess < 1) {
    alert("Please Enter a Number Between 1 to 100");
  } else if (guess > 100) {
    alert("Please Enter a Number Between 1 to 100");
  } else {
    prevGuess.push(guess);
    displayMessage(guess);
  }
}

function displayMessage(guess) {
  inp.value = "";
  guessedArr.innerHTML += `${guess},`;
  RemGuess.innerText = `${10 - numOfguessed}`;
  numOfguessed += 1; //numOfguessed =  numOfguessed + 1

  if (numOfguessed > 10) {
    // RemGuess.innerHTML = `Game Over. Out of Chances. The Number was ${randomNumber}`;
    endGame(guess, RemGuess);
  } else if (guess < randomNumber) {
    lowOrHig.innerHTML = `The Number is Greater Than ${guess}`;
  } else if (guess > randomNumber) {
    lowOrHig.innerHTML = `The Number is Less Than ${guess}`;
  } else if (guess === randomNumber) {
    lowOrHig.innerHTML = `Congrats You Won The Game. The Number was ${randomNumber}`;
  }
}
function endGame(guess, RemGuess) {
  inp.value = "";
  inp.setAttribute("disabled", "");
  lowOrHig.innerHTML = "";
  RemGuess.innerHTML = "0";
  const newElem = document.createElement("h1");
  newElem.innerHTML = "Game Over. Out of Chances";
  RemGuess.appendChild(newElem);
  playGame = false;
  newGame(guess);
  // startNewGame.style.display = "block";
}

function newGame(guess) {
  const startNewGame = document.querySelector(".newGame");
  startNewGame.style.display = "block";

  startNewGame.addEventListener("click", function () {
    startNewGame.style.display = "none";
    prevGuess = [];
    numOfguessed = 0;
    guessedArr.innerHTML = ``;
    RemGuess.innerText = `${10 - numOfguessed}`;
    playGame = true;
    inp.removeAttribute("disabled", "");
  });
}
