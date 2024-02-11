const container_div = document.querySelector("#container");
const resetBtn = document.querySelector("#resetBtn");

function createGrid(rows, cols) {
    container_div.textContent = ""
    for (let i = 0; i < rows * cols; i++) {
        const square = document.createElement("div");
        square.classList.add("square_grid");
        container_div.appendChild(square);
    }
};

function promptForGridSize() {
    const gridSize = parseInt(prompt("Enter the number of squares per side (maximum 100): "), 10);
    if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
        createGrid(gridSize, gridSize);
    } else {
        alert("Please enter a valid number between 1 and 100.");
    }
};

resetBtn.addEventListener("click", promptForGridSize);

createGrid(16, 16);

