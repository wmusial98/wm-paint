let gridNumber = 2500;
let gameRun = true;
let gridSize = 50;

const menuBar = document.querySelector('.menuBar');
const gridSpace = document.querySelector('.drawBoard');

for (let i = 1; i <= gridNumber; i++) {
    const gridSquares = document.createElement('div');
    gridSquares.classList.add('gridSquares');

    gridSquares.addEventListener('mouseover', function(e) {
        e.target.style.backgroundColor = 'pink';
    });
    gridSpace.appendChild(gridSquares);
}

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  gridSize = this.value;
  
  resetGrid();
  console.log(gridNumber);
}

function resetGrid() {
    gridNumber = Math.pow(gridSize, 2);
    removeAllChildNodes(gridSpace);
    makeGrid(gridNumber);
}

function makeGrid(gridNum) {
    let newSquareSize = 1000 / gridSize;
    console.log(newSquareSize);
    for (let i = 1; i <= gridNum; i++) {
        const gridSquares = document.createElement('div');
        gridSquares.classList.add('gridSquares');
        gridSquares.style.width = newSquareSize + 'px';
        gridSquares.style.height = newSquareSize + 'px';
        gridSquares.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = 'pink';
        });
        gridSpace.appendChild(gridSquares);
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}