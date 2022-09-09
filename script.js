let gridNumber = 2500;
let gameRun = true;
let gridSize = 50;
let mode = 'draw';
const colorArray = ['#000000', '#FFFFFF', '#1C33E9', '#AF52DB', '#BA2626', '#DE9A56', '#FBF878', '#56BF23'];
let currentColor = '#000000';

/* first grid initialization */
const menuBar = document.querySelector('.menuBar');
const gridSpace = document.querySelector('.drawBoard');

for (let i = 1; i <= gridNumber; i++) {
    const gridSquares = document.createElement('div');
    gridSquares.classList.add('gridSquares');
    gridSquares.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = currentColor;
    });
    gridSpace.appendChild(gridSquares);
}

/* MENU INITIALIZATION */
/* slider */
let slider = document.getElementById("myRange");
let output = document.getElementById("demo");
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  gridSize = this.value;
  resetGrid();
}

/* color buttons */
for(let i = 0; i < colorArray.length; i++) {
    const colorButton = document.createElement('button');
    colorButton.classList.add('colorButton');
    colorButton.textContent = '';
    colorButton.addEventListener('click', function(e) {
        currentColor = colorArray[i];
        /* resetGrid(); */
    });
    colorButton.style.backgroundColor = colorArray[i];
    menuBar.appendChild(colorButton);
}

/* reset button */
let resetButton = document.createElement('button');
resetButton.classList.add('resetButton');
resetButton.textContent = 'RESET CANVAS';
resetButton.addEventListener('click', resetGrid);
menuBar.appendChild(resetButton);


/* METHOD FUNCTIONS: basic functions used to reset the grid every time it is updated */
function resetGrid() {
    gridNumber = Math.pow(gridSize, 2);
    removeAllChildNodes(gridSpace);
    makeGrid(gridNumber);
}

function makeGrid(gridNum) {
    let newSquareSize = 1000 / gridSize;
    for (let i = 1; i <= gridNum; i++) {
        const gridSquares = document.createElement('div');
        gridSquares.classList.add('gridSquares');
        gridSquares.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = currentColor;
        });
        gridSquares.style.width = newSquareSize + 'px';
        gridSquares.style.height = newSquareSize + 'px';
        gridSpace.appendChild(gridSquares);
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}