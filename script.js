//DOM
const link = document.getElementById("link");

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


