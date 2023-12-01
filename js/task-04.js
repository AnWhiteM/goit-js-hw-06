const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.getElementById("value");

let counterValue = 0;

decrementButton.addEventListener("click", decrementCounter);
incrementButton.addEventListener("click", incrementCounter);
function decrementCounter() {
  counterValue -= 1;
  updateCounterValue();
}

function incrementCounter() {
  counterValue += 1;
  updateCounterValue();
}

function updateCounterValue() {
  counterValueSpan.textContent = counterValue;
}
