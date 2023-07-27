const incrementBtn = document.querySelector(".incrementBtn");
const decrementBtn = document.querySelector(".decrementBtn");
const resetBtn = document.querySelector(".resetBtn");
const value = document.querySelector(".value");
//For increment
incrementBtn.addEventListener("click", () => {
  const valueDisplay = Number(value.innerText);
  value.innerText = valueDisplay + 1;
});
//For decrement
decrementBtn.addEventListener("click", () => {
  const valueDisplay = Number(value.innerText);
  if (valueDisplay > 0) {
    value.innerText = valueDisplay - 1;
  } else {
    alert("Negative Values are not allowed");
  }
});
//For reset
resetBtn.addEventListener("click", () => {
  value.innerText = 0;
});
