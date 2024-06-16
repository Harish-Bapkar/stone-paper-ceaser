"use strictmode";

const btnStone = document.querySelector(".images-choice-1");
const btnPaper = document.querySelector(".images-choice-2");
const btnCeaser = document.querySelector(".images-choice-3");
const btnNewGame = document.querySelector(".button-1");
const btnResult = document.querySelector(".button-2");
const displayResult = document.querySelector("#Display-Board");
let playerChoice = 0;
const compChoice = Math.trunc(Math.random() * 3) + 1;
var isPlayerWin = false;
var isDraw = false;

btnStone.addEventListener("click", function () {
  document.getElementById("player").src = "img-1.png";
  playerChoice = 1;
  result();
});

btnPaper.addEventListener("click", function () {
  document.getElementById("player").src = "img-2.png";
  playerChoice = 2;
  result();
});

btnCeaser.addEventListener("click", function () {
  document.getElementById("player").src = "img-3.png";
  playerChoice = 3;
  result();
});

const result = () => {
  if (playerChoice) {
    document.getElementById("comp").src = `img-${compChoice}.png`;
    isDraw = playerChoice === compChoice;
    isPlayerWin =
      (playerChoice === 1 && compChoice === 3) ||
      (playerChoice === 2 && compChoice == 1) ||
      (playerChoice === 3 && compChoice === 2);
    console.log(isPlayerWin);

    if (isPlayerWin) {
      displayResult.textContent = "Player Won the Game";
      document.querySelector(".players1").classList.add("win");
    } else if (isDraw) {
      displayResult.textContent = "Game Draw";
    } else {
      displayResult.textContent = "Computer won the Game";
      document.querySelector(".players2").classList.add("win");
    }
  }
};

btnNewGame.addEventListener("click", function () {
  document.getElementById("comp").src = "computer.png";
  displayResult.textContent = "Lets play game";
  document.getElementById("player").src = "player.png";

  let playerChoice = 0;
  const compChoice = Math.trunc(Math.random() * 3) + 1;
  var isPlayerWin = false;
  var isDraw = false;
});
