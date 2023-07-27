const inputBox = document.getElementById("inputBox");
const displayInput = document.getElementById("displayInput");
inputBox.addEventListener("keypress", (e) => {
  displayInput.textContent += inputBox.value;
});
