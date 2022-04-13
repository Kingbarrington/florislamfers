//DOM
const box = document.querySelectorAll(".box");
//Global
const board = [
  ["X", "O", "X"],
  ["O", "X", "X"],
  ["O", "X", ""],
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
      if (arr[i][j] !== "") counter++;
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

let bestMove = [];
let options = [];

const minimax = (newBoard, player) => {
  console.log("minimax call");
  console.log(newBoard);
  if (winChecker(newBoard) === 10) {
    return 10;
  }
  if (winChecker(newBoard) === -10) {
    return -10;
  }
  if (winChecker(newBoard) === 0) {
    return 0;
  }
  let moves = [];
  let availableSpots = [];
  for (let row = 0; row < newBoard.length; row++) {
    for (let column = 0; column < newBoard[row].length; column++) {
      if (newBoard[row][column] === "") {
        let spot = {};
        spot.row = row;
        spot.column = column;
        availableSpots.push(spot);
        console.log(availableSpots);
      }
    }
  }

  if (player === ai) {
    availableSpots.forEach((element) => {
      newBoard[element.row][element.column] = ai;  
      minimax(newBoard, human);
    });
  }

  if (player === human) {
    availableSpots.forEach((element) => {
      newBoard[element.row][element.column] = human; 
      minimax(newBoard, ai);
    });
  }
};


minimax(board, ai);
