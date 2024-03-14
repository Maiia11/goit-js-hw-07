const bodyEl = document.querySelector("body");
const butnEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color")
butnEl.addEventListener("click", handleClick);
function handleClick() {
  bodyEl.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = bodyEl.style.backgroundColor;
  return
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

