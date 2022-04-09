//DOM
const link = document.getElementById("link");
const typingBox = document.getElementById("typing-box");
//Global

//Global arrays
const emoji = [
  "🦃",
  "🐓",
  "🦆",
  "🦢",
  "🦜",
  "🐳",
  "🐍",
  "🦄",
  "🐦",
  "🐟",
  "🐠",
];

const fl = "FLoris Lamfers"


//Utility functions

const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

//Random Favicon
const randomFavicon = () => {
  link.setAttribute(
    "href",
    `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${
      emoji[randomNumberBetween(0, 10)]
    }</text></svg>`
  );
  console.log(link.getAttribute("href"));
};

randomFavicon();

//Typing animation
let i = 0;

const typeWord = () => {
    if(i < fl.length) {
        typingBox.innerHTML += fl.charAt(i);
        i++;
        setTimeout(typeWord, 140)
    }
};
typeWord();



