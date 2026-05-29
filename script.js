const container = document.querySelector(".container");
const gridButton = document.querySelector(".gridBtn");
const gridWidth = container.getBoundingClientRect().width - 2;

function setColour(square) {
  const RED = Math.floor(Math.random() * 256);
  const GREEN = Math.floor(Math.random() * 256);
  const BLUE = Math.floor(Math.random() * 256);
  return `rgb(${RED}, ${GREEN}, ${BLUE})`;
}

function generateGrid(len) {
  const grid = document.createElement("div");
  grid.classList.add("grid");
  for (let i = 0; i < len ** 2; i++) {
    const square = document.createElement("div");
    square.style.width = `${gridWidth / len}px`;
    square.style.height = square.style.width;
    square.classList.add("square");
    grid.appendChild(square);
  }
  grid.addEventListener("mouseover", (e) => {
    // Prevent entire grid from blacking out on mouseover
    if (e.target !== e.currentTarget) {
      if (e.target.style.backgroundColor === "") {
        e.target.style.backgroundColor = setColour(e.target);
        e.target.style.opacity = 0.1;
      } else {
        e.target.style.opacity = parseFloat(e.target.style.opacity) + 0.1;
      }
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