const container = document.querySelector(".container");
const displayInput = document.querySelector(".displayInput");
document.addEventListener("keydown", function (e) {
  displayInput.style.color = "red";
  displayInput.innerText = e.key + " is keyDown";
});
document.addEventListener("keyup", function (e) {
  displayInput.style.color = "green";
  displayInput.innerText = e.key + " is keyUp";
});
