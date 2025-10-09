const buttons = document.querySelectorAll(".button-option");
const resBtn = document.getElementById("res-btn");
const boardElem = document.querySelector(".board");
const resultElem = document.querySelector(".result");
const xScoreElem = document.querySelector(".xscore-btn");
const oScoreElem = document.querySelector(".oscore-btn");
const scoreElem = document.querySelector(".score");
const resScoreElem = document.querySelector(".res-score");

let xScore = 0;
let oScore = 0;

resScoreElem.addEventListener("click", () => {
  xScore = 0;
  xScoreElem.innerHTML = `X Score: ${xScore}`;
  oScore = 0;
  oScoreElem.innerHTML = `O Score: ${oScore}`;
});

let xTurn = true;

let board = ["", "", "", "", "", "", "", "", ""];
const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (xTurn) {
      xTurn = false;
      button.textContent = "X";
      button.disabled = true;
      board[index] = "X";
      console.log(board);
    } else {
      xTurn = true;
      button.textContent = "O";
      button.disabled = true;
      board[index] = "O";
      console.log(board);
    }

    checkWinner();
  });
});
console.log(buttons);

function checkWinner() {
  winningPatterns.forEach((pattern) => {
    let [a, b, c] = pattern;
    if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
      showWinner(board[a]);
      return;
    }
  });
  if (!board.includes("")) {
    showWinner("Draw");
  }
}

function showWinner(winner) {
  boardElem.classList.add("hidden");
  scoreElem.classList.add("hidden");

  if (winner === "Draw") {
    console.log("draw");

    resultElem.innerHTML = `<h2 id="result-text">😅 It's a Draw!</h2>`;
    return;
  } else {
    if (winner === "X") {
      xScore++;
      xScoreElem.innerHTML = `X Score: ${xScore}`;
    } else if (winner === "O") {
      oScore++;
      oScoreElem.innerHTML = `O Score: ${oScore}`;
    }
    console.log(winner, "wins");

    resultElem.innerHTML = `<h2 id="result-text">🎉 ${winner} Wins!</h2>`;
  }
}

resBtn.addEventListener("click", () => {
  buttons.forEach((btn) => {
    btn.textContent = "";
    btn.disabled = false;
    board = ["", "", "", "", "", "", "", "", ""];
  });

  boardElem.classList.remove("hidden");
  scoreElem.classList.remove("hidden");

  resultElem.innerHTML = "";
});
