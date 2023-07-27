const targetArea = document.getElementById("box");
console.log(targetArea);
targetArea.addEventListener("mouseout", () => {
  targetArea.style.backgroundColor = "yellow";
});
