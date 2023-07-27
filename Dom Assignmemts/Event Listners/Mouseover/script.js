const targetArea = document.getElementById("box");
console.log(targetArea);
targetArea.addEventListener("mouseover", () => {
  targetArea.style.backgroundColor = "red";
});
