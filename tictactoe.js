//DOM
const box = document.querySelectorAll(".box");
//Global
const board = [
  ["X", "", "X"],
  ["", "X", ""],
  ["", "", "X"],
];
const human = "X";
const ai = "O";

//board draw
let boardPos = 0;
const drawBoard = () => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      boardPos++;
      document.getElementById(boardPos).innerHTML = board[i][j];
    }
  }
};

//functions
const place = (element, player) => {
  element.innerHTML = player;
};

// winchecker
const winChecker = (arr) => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    let counterX = 0;
    let counterY = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] !== "") if (arr[i][j] === "X") counterX++;
      if (arr[i][j] === "O") counterY++;
      if (counterX === 3) {
        console.log("X won!");
        return 10;
      }
      if (counterY === 3) {
        console.log("O won!");
        return -10;
      }
      if (counter === 9) {
        console.log("draw");
        return 0;
      }
    }
  }
  for (let i = 0; i < arr[0].length; i++) {
    let counterX = 0;
    let counterY = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[j][i] === "X") counterX++;
      if (arr[j][i] === "O") counterY++;
      if (counterX === 3) {
        console.log("X won!");
        return 10;
      }
      if (counterY === 3) {
        console.log("O won!");
        return -10;
      }
    }
  }
  if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") {
    console.log("X won!");
    return 10;
  } else if (
    board[0][2] === "X" &&
    board[1][1] === "X" &&
    board[2][0] === "X"
  ) {
    console.log("X won!");
    return 10;
  }

  if (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") {
    console.log("O won!");
    return -10;
  } else if (
    board[0][2] === "O" &&
    board[1][1] === "O" &&
    board[2][0] === "O"
  ) {
    console.log("O won!");
    return -10;
  }
};

winChecker(board);

window.onclick = (e) => {
  let currentElement = e.path[0].childNodes[0];
  let id = currentElement.getAttribute("id");
  if (id <= 3) {
    board[0][id - 1] = human;
  }
  if (id > 3 && id <= 6) {
    board[1][id - 4] = human;
  }
  if (id > 6 && id <= 9) {
    board[2][id - 7] = human;
  }
  place(currentElement, human);
};

//minimax

const pseudoPlace = (pseudoBoard, player) => {
  for (let i = 0; i < pseudoBoard.length; i++) {
    for (let j = 0; j < pseudoBoard[i].length; j++) {
      if (pseudoBoard[i][j] === "") {
        pseudoBoard[i][j] = player;
        moves.push(`[${i}][${j}]`);
        return;
      }
    }
  }
};

let pseudoBoard = board;
let moves = [];
let bestMove = [];

const minimax = (player) => {
  console.log("minimax call");
  if (player === human) {
    let max = -10000000;
    pseudoPlace(pseudoBoard, human);

    if (winChecker(pseudoBoard) !== undefined) {
      if (winChecker(pseudoBoard) > max) {
        max = winChecker(pseudoBoard);
        console.log(max);
        bestMove = moves[0];
        console.log(bestMove);
        moves = [];
        pseudoBoard = board;
      }
    }
    minimax(ai);
  }
  if (player === ai) {
    let min = 10000000;
    pseudoPlace(pseudoBoard, ai);
    if (winChecker(pseudoBoard) !== undefined) {
      if (winChecker(pseudoBoard) < min) {
        min = winChecker(pseudoBoard);
        console.log(min);
        bestMove = moves[0];
        console.log(bestMove);
        moves = [];
        pseudoBoard = board;
      }
    }
    // minimax(human);
  }
};
minimax(human);
