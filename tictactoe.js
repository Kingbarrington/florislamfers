//DOM
const box = document.querySelectorAll(".box");
//Global
const board = [
  ["Y", "", "X"],
  ["", "Y", ""],
  ["X", "", "Y"],
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
  for (let i = 0; i < arr.length; i++) {
    let counterX = 0;
    let counterY = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === "X") counterX++;
      if (arr[i][j] === "Y") counterY++;
      if (counterX === 3) console.log("X won!");
      if (counterY === 3) console.log("Y won!");
    }
  }
  for (let i = 0; i < arr[0].length; i++) {
    let counterX = 0;
    let counterY = 0;
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[j][i] === "X") counterX++;
      if (arr[j][i] === "Y") counterY++;
      if (counterX === 3) console.log("X won!");
      if (counterY === 3) console.log("Y won!");
    }
  }
  if(board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") { console.log("X won!");
  } else if(board[0][2] === "X" && board[1][1] === "X" && board[2][0] === "X") {console.log("X won!"); }
	
  if(board[0][0] === "Y" && board[1][1] === "Y" && board[2][2] === "Y") { console.log("Y won!");
  } else if(board[0][2] === "Y" && board[1][1] === "Y" && board[2][0] === "Y") { console.log("Y won!");}

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
