const container = document.querySelector(".container");
const gridButton = document.querySelector(".gridBtn");

function generateGrid(len) {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  for (let i = 0; i < len ** 2; i++) {
    const square = document.createElement("div");
    square.style.height = `${1000 / len}px`;
    square.style.width = `${1000 / len}px`;
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
  } else {
    container.removeChild(container.firstChild);
    generateGrid(size);
  }
});

generateGrid(16);