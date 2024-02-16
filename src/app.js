// This is my new project for the Coding Guidelines Challenge

let who = [
  "My creepy uncle",
  "Seven dwarves",
  "Taco Bell",
  "Celine Dion",
  "Your Ex",
  "Miss Peru",
];
let did = [
  "kissed",
  "sued",
  "offered to assasinate",
  "puked on",
  "set on fire",
  "smashed",
];
let what = [
  "Sweeden",
  "the pope",
  "Ali Baba",
  "your mother",
  "the easter bunny",
  "Steve Jobs",
];
let when = [
  "just 5 minutes ago",
  "not officially yet",
  "at tea time",
  ",god know's when",
  "during the world cup",
  "last christmas",
];

const excuseGenerator = () => {
  let wordLibrary = [who, did, what, when];

  let newExcuse = wordLibrary.map(
    (array) => array[Math.floor(Math.random() * array.length)]);

  document.getElementById("excuse").innerHTML = newExcuse.join(" ");
};

window.onload = excuseGenerator();

document.getElementById("excuseButton").onclick = function() {
  excuseGenerator();
};
