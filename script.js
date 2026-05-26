const container = document.querySelector(".container");
const gridButton = document.querySelector(".gridBtn");

function generateGrid(len) {
  const grid = document.createElement("div");
  for (let i = 0; i < Math.pow(len, 2); i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    grid.appendChild(square);
  }
  grid.addEventListener("mouseover", (e) => {
    // Prevent container from blacking out on mouseover
    if (e.target !== e.currentTarget) {
      e.target.style.backgroundColor = "black";
      setTimeout(() => {
        e.target.style.backgroundColor = "";
      }, 500);
    }
  });
  container.appendChild(grid);
}

gridButton.addEventListener("click", () => {
  let size = prompt("How many squares across should the new grid be?");
  if (size > 100) {
    alert("Whoa, a grid that size is too big to handle!");
  }
});

generateGrid(16);