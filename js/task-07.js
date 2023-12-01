const fontSizeControl = document.getElementById("font-size-control");
const textElement = document.getElementById("text");
textElement.style.fontSize = `57px`;

fontSizeControl.addEventListener("input", updateFontSize);

function updateFontSize() {
  const fontSizeValue = fontSizeControl.value;
  textElement.style.fontSize = `${fontSizeValue}px`;
}
