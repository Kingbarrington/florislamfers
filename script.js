//DOM
const link = document.getElementById("link");
const typingBox = document.getElementById("typing-box");
const cursor = document.getElementById("cursor");
const menu = document.getElementById("menu");
const dropdown = document.getElementById("dropdown");
const dropdownA = document.querySelectorAll(".dropdown");
//Global
console.log(dropdownA[1])
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

const fl = "Floris Lamfers";

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
  if (i < fl.length) {
    typingBox.innerHTML += fl.charAt(i);
    i++;
    setTimeout(typeWord, 140);
  }
  if (i === fl.length) {
    cursor.style.animation = "blink 1s steps(1, start) infinite";
  }
};
typeWord();

window.onkeydown = (e) => {
  if (e.key === "Backspace")
    typingBox.innerHTML = typingBox.innerHTML.slice(0, -1);
  if (32 < e.keyCode && e.keyCode < 127) typingBox.innerHTML += e.key;
};

//dropdown logic
const menuHide = () => {
  dropdown.style.transform = "translatey(-400px)";
  dropdown.style.opacity = "0";
  dropdown.classList.remove("active");
}
menu.onclick = (e) => {
  if (
    dropdown.getAttribute("class") === null ||
    dropdown.getAttribute("class") === ""
  ) {
    dropdown.style.transform = "translatey(0)";
    dropdown.style.opacity = "1";
    dropdown.setAttribute("class", "active");
  } else {
    menuHide();
  }
};

dropdownA[0].onclick = menuHide;
dropdownA[1].onclick = menuHide;
dropdownA[2].onclick = menuHide;
