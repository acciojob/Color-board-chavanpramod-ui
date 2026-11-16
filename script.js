//your JS code here. If required.
const container = document.getElementById("container");
const TOTAL_SQUARES = 800;
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71', '#f1c40f', '#1abc9c'];

for (let i = 0; i < TOTAL_SQUARES; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        square.style.backgroundColor = randomColor;
    });

    square.addEventListener("mouseout", () => {
        square.style.backgroundColor = "#1d1d1d";
    });

    container.appendChild(square);
}