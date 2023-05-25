const screenContainer = document.getElementById("etch-a-sketch");
const square = document.createElement('div');

let gridNo = 50;
let gridSize = gridNo * gridNo;

let grid = document.createElement("div");
grid.id = "screen";
grid.style.gridTemplateColumns = "repeat(" + gridNo + ", [col-start] 1fr)";
screenContainer.appendChild(grid);

// For loop based on grid size
for (i=0; i<gridSize; i++) {
    // create a div
    let cell = document.createElement("div");
    // give it the id of square
    cell.id = "square";
    // change css on mouseover
    cell.addEventListener('mouseover', function handleMouseOver() {
        cell.id = "hovered";
    });
    // also change css on mouseout so it remains grey
    cell.addEventListener('mouseout', function handleMouseOut() {
        cell.cell.id = "hovered";
    });
    // add div to container
    grid.appendChild(cell);
}
