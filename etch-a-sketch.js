const container = document.querySelector("#container");

const sketchPad = document.createElement("div");
sketchPad.setAttribute("id", "sketchPad");

const resetBtn = document.createElement("button");
resetBtn.setAttribute("class", "resetBtn");
resetBtn.textContent = "New Grid";

container.append(sketchPad, resetBtn);

function getRandomRGBValue() {
  return Math.floor(Math.random() * 256);
}

function darkenColor(color, factor) {
  // Darken the color by applying a factor (0 to 1)
  return Math.floor(color * (1 - factor));
}

function createGrid(size) {
  sketchPad.textContent = "";

  for (let i = 0; i < size; i++) {
    const column = document.createElement("div");
    column.classList.add("column");

    for (let j = 1; j <= size; j++) {
      const row = document.createElement("div");
      row.classList.add("row");
      column.appendChild(row);
    }
    sketchPad.appendChild(column);
  }
}

function promptForGridSize() {
  const gridSize = parseInt(
    prompt("Enter the number of squares per side (maximum 100):"),
    10
  );
  if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
    createGrid(gridSize);
    addSquareListeners(); // Add event listeners after creating the grid
  } else {
    alert("Please enter a valid number between 1 and 100.");
  }
}

function addSquareListeners() {
  const rows = document.querySelectorAll(".row");
  rows.forEach((row) => {
    row.addEventListener("mouseover", changeColor);
  });
}

function changeColor(event) {
  const row = event.target;
  const r = getRandomRGBValue();
  const g = getRandomRGBValue();
  const b = getRandomRGBValue();
  const currentColor = window.getComputedStyle(row).backgroundColor;
  const factor = 0.1; // Darkening factor (10% per interaction)

  // Parse the current color to extract RGB values
  const [, rValue, gValue, bValue] = currentColor.match(/\d+/g);

  // Calculate the new color with random RGB values and progressive darkening
  const newR = darkenColor(r, factor);
  const newG = darkenColor(g, factor);
  const newB = darkenColor(b, factor);

  row.style.backgroundColor = `rgb(${newR}, ${newG}, ${newB})`;
}

resetBtn.addEventListener("click", promptForGridSize);
sketchPad.addEventListener("mousedown", addSquareListeners);

createGrid(16);
