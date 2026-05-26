const container = document.querySelector(".container");
const gridButton = document.querySelector(".gridBtn");

for (let i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  container.appendChild(square);
}

container.addEventListener("mouseover", (e) => {
  // Prevent container from blacking out on mouseover
  if (e.target !== e.currentTarget) {
    e.target.style.backgroundColor = "black";
    setTimeout(() => {
      e.target.style.backgroundColor = "";
    }, 500);
  }
});

gridButton.addEventListener("click", () => {
  let size = prompt("How many squares across should the new grid be?");
});