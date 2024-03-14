const input = document.querySelector("input");
const btnCreate = document.querySelector("button[data-create]");
const btnDestroy = document.querySelector("button[data-destroy]");
const box = document.querySelector("#boxes");
let width = 30;
let height = 30;
btnCreate.addEventListener("click", handleClick);
console.log(input.value);

function handleClick() {
  box.innerHTML = "";
  if (input.value < 0 || input.value > 100) {
    return;
  }
  createBoxes(input.value)
}

function createBoxes() {
  for (let i = 0; i < input.value; i++) {
    const boxDiv = document.createElement("div");
    boxDiv.style.width = `${width}px`;
    boxDiv.style.height = `${height}px`;
    boxDiv.style.backgroundColor = getRandomHexColor();
    box.append(boxDiv);
    width += 10;
    height += 10;
  }
 
 }

 btnDestroy.addEventListener("click", handleClickDestr);

 function handleClickDestr () {
  box.innerHTML = "";
  input.value = "";
 }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
