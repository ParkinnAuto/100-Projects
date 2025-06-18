const dice = document.querySelector(".dice");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");

let historyList = [];

const rollDice = () => {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  dice.innerHTML = diceFace;
  historyList.push(rollResult);
  updateRollHistory();
};

const updateRollHistory = () => {
  output.innerHTML = "";
  historyList.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${index + 1}: <span>${getDiceFace(item)}</span>`;
    output.appendChild(listItem);
  });
};

const getDiceFace = (roll) => {  // Changed parameter name to avoid confusion
  switch (roll) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
    default:
      return "";
  }
};

btn.addEventListener("click", () => {
  dice.classList.add('roll-animation');
  setTimeout(() => {
    dice.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});