let who = [
  "My creepy uncle ",
  "Seven dwarves ",
  "Taco Bell ",
  "Celine Dion ",
  "Your Ex ",
  "Miss Peru "
];
let action = [
  "kissed ",
  "sued ",
  "offered to assasinate ",
  "puked on ",
  "set on fire ",
  "smashed "
];
let what = [
  "Sweeden ",
  "the pope ",
  "Ali Baba ",
  "your mother ",
  "the easter bunny ",
  "Steve Jobs "
];
let when = [
  "just 5 minutes ago",
  "not officially yet",
  "at tea time",
  ",god know's when",
  "during the world cup",
  "last christmas"
];

const newExcuse = () => {
  let excuse =
    who[Math.floor(Math.random() * who.length)] +
    action[Math.floor(Math.random() * action.length)] +
    what[Math.floor(Math.random() * what.length)] +
    when[Math.floor(Math.random() * when.length)];

  document.getElementById("excuse").innerHTML = excuse;
};

window.onload = newExcuse();

document.getElementById("excuseButton").onclick = function() {
  newExcuse();
};

document.getElementById("excuseButton").style;
