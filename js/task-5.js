const bodyEl = document.querySelector("body");
const butn = document.querySelector(".change-color");
const span = document.querySelector(".color")
butn.addEventListener("click", handleClick);
function handleClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  span.textContent = bodyEl.style.backgroundColor;
  return
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

