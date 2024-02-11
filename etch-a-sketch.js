const container_div = document.querySelector("#container");
const resetBtn = document.querySelector("#resetBtn");

function getRandomRGBValue() {
    return Math.floor(Math.random() * 256);
}

function darkenColor(color, factor) {
    // Darken the color by applying a factor (0 to 1)
    return Math.floor(color * (1 - factor));
}

function createGrid(size) {
    container_div.textContent = "";
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("square_grid");
        container_div.appendChild(square);
    }
}

function promptForGridSize() {
    const gridSize = parseInt(prompt("Enter the number of squares per side (maximum 100):"), 10);
    if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
        createGrid(gridSize);
        addSquareListeners(); // Add event listeners after creating the grid
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
}

function addSquareListeners() {
    const squares = document.querySelectorAll(".square_grid");
    squares.forEach((square) => {
        square.addEventListener("mouseover", changeColor);
    });
}

function changeColor(event) {
    const square = event.target;
    const r = getRandomRGBValue();
    const g = getRandomRGBValue();
    const b = getRandomRGBValue();
    const currentColor = window.getComputedStyle(square).backgroundColor;
    const factor = 0.1; // Darkening factor (10% per interaction)

    // Parse the current color to extract RGB values
    const [, rValue, gValue, bValue] = currentColor.match(/\d+/g);

    // Calculate the new color with random RGB values and progressive darkening
    const newR = darkenColor(r, factor);
    const newG = darkenColor(g, factor);
    const newB = darkenColor(b, factor);

    // Apply the new color
    square.style.backgroundColor = `rgb(${newR}, ${newG}, ${newB})`;
}

resetBtn.addEventListener("click", promptForGridSize);
container_div.addEventListener("mouseover", addSquareListeners);
// Initial grid (you can adjust the default size if needed)
createGrid(16);
