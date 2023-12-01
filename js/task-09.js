const bodyElement = document.body;
const colorSpan = document.querySelector(".color");
const colorchangeButton = document.querySelector(".change-color");

colorchangeButton.addEventListener("click", changeBodyColor);

function changeBodyColor() {
  const randomColor = getRandomHexColor();

  bodyElement.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
