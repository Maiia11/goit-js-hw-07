const div = document.querySelector(".widget");
const butn = document.querySelector(".change-color");
const span = document.querySelector(".color")
butn.addEventListener("click", handleClick);
function handleClick() {
  span.textContent = getRandomHexColor();
  div.style.backgroundColor = getRandomHexColor();
  return
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
