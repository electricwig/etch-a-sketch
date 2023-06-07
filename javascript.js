const screenContainer = document.getElementById("screen-container");
const square = document.createElement('div');
const clearScreen = document.getElementById("clear");
const slider = document.getElementById("myRange");
let sliderValue = document.getElementById("sliderValue")

// add clearScreen function to our Clear button
clearScreen.addEventListener('click', clearGrid);


// ** INIT **

// Start grid off at 16 x 16
let gridNo = 16;
let gridSize = gridNo * gridNo;

// Display our starting grid
setGridSize(16);

// Set the slider
slider.value = 16;

// Set the text area to show slider value
sliderValue.innerText = slider.value



// ** MAIN GRID FUNCTIONS **

// Simple function to remove previous grid
function removeGrid () {
    var element = document.getElementById("screen");
    element.parentNode.removeChild(element);
}


// Calculate new grid size then create new grid (after calling removeGrid)
function setGridSize (newGridSize) {
    gridNo = newGridSize;
    gridSize = gridNo * gridNo;
    newGrid();
}


// Create new grid
function newGrid () {
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
        // to do: change css on CLICK
        cell.addEventListener('mousedown', function handleMouseDown(e) {
            // check for mouse button
            if(e.buttons == 1){
               cell.id = "hovered";
            }
        });
        // change css on mouseover
        cell.addEventListener('mouseover', function handleMouseOver(e) {
            // check for mouse button
            if(e.buttons == 1){
               cell.id = "hovered";
            }
        });
        // also change css on mouseout so it remains grey
        cell.addEventListener('mouseout', function handleMouseOut(e) {
            if(e.buttons == 1){
               cell.id = "hovered";
            }
        });
        // add div to container
        grid.appendChild(cell);
    }

}



// ** TOOLBAR FUNCTIONS **

// Function to clear current grid
function clearGrid () {
    // First get a nodeList of all 'hovered' squares by id
    const drawnSquares = document.querySelectorAll("#hovered");
    // Then loop over them
    for (let i = 0; i < drawnSquares.length; i++) {
        // and change their id back to square
        drawnSquares[i].id = "square";
    }
}   

// Function to change grid size via slider
slider.oninput = function() {
    removeGrid();
    setGridSize(this.value);
    sliderValue.innerHTML = slider.value;       
}

