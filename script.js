
const counterDisplay = document.getElementById("counter");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

let count = 0;

function updateCounter() {
  counterDisplay.textContent = count;

  // Disable decrease when the count reaches zero.
  decreaseButton.disabled = count === 0;
}

increaseButton.addEventListener("click", function () {
  count++;
  updateCounter();
});

decreaseButton.addEventListener("click", function () {
  if (count > 0) {
    count--;
    updateCounter();
  }
});

resetButton.addEventListener("click", function () {
  count = 0;
  updateCounter();
});

// Initialize the counter and button states.
updateCounter();
