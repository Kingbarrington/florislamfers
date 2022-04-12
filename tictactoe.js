//DOM
const box = document.querySelectorAll(".box");
//Global
const board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
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

drawBoard();

const place = (element, player) => {
  element.innerHTML = player;
}


window.onclick = (e) => {   
  let currentElement = e.path[0].childNodes[0];
  place(currentElement, human);
}

