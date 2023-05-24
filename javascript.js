const screenContainer = document.getElementById("screen");
const square = document.createElement('div');


let gridSize = 256;


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
    screenContainer.appendChild(cell);
}
