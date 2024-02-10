const container_div = document.querySelector("#container");

function createGrid(rows, cols) {
    for (let i = 0; i < rows * cols; i++) {
        const square = document.createElement("div");
        square.classList.add("square_grid");
        container_div.appendChild(square);
    }
};

createGrid(16 , 16)