const container = document.querySelector(".container");

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