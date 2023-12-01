const validationInput = document.getElementById("validation-input");
const inputLength = parseInt(validationInput.dataset.length, 10);

validationInput.addEventListener("blur", checkInputLength);

function checkInputLength() {
  const enteredTextLength = validationInput.value.length;
  validationInput.classList.remove("valid", "invalid");

  if (enteredTextLength === inputLength) {
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.add("invalid");
  }
}
