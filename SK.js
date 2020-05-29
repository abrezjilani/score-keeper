let p1button = document.getElementById("pl1");
let p2button = document.getElementById("pl2");
let p1 = document.querySelector("#player1");
let p2 = document.querySelector("#player2");

let resetButton = document.querySelector("#reset");
let numInput = document.querySelector("input");
let winningScoreDisplay = document.querySelector("#winningScore");

let p1score = 0;
let p2score = 0;
let gameOver = false;
//The use of gameOver ensures that there's no increment after anyone's score reaches 5
let winningScore = 5;

p1button.addEventListener("click", function () {
  //Here p1score is only being incremented and displayed till 5
  if (!gameOver) {
    p1score++;
    if (p1score === winningScore) {
      p1.classList.add("winner");
      gameOver = true;
    }
  }
  p1.textContent = p1score;
});
p2button.addEventListener("click", function () {
  if (!gameOver) {
    p2score++;
    if (p2score === winningScore) {
      p2.classList.add("winner");
      gameOver = true;
    }
  }
  p2.textContent = p2score;
});

resetButton.addEventListener("click", function () {
  reset();
});

function reset() {
  gameOver = false;
  p1score = 0;
  p1.textContent = 0;
  p2score = 0;
  p2.textContent = 0;
  p1.classList.remove("winner");
  p2.classList.remove("winner");
}

numInput.addEventListener("change", function () {
  winningScoreDisplay.textContent = this.value;
  winningScore = Number(this.value);
  reset();
});
