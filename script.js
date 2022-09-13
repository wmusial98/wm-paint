let gridNumber = 2500;
let gameRun = true;
let gridSize = 50;
let mode = 'draw';
const colorArray = ['#000000', '#FFFFFF', '#1C33E9', '#AF52DB', '#BA2626', '#DE9A56', '#FBF878', '#56BF23'];
const opacityArray = ['10', '20', '30', '40', '50', '60', '70', '80', '90'];
let currentColor = '#000000';
let borderToggle = true;
let randomBackgroundColor = '';
let penMode = false;

/* first grid initialization */
const menuBar = document.querySelector('.menuBar');
const gridSpace = document.querySelector('.drawBoard');

for (let i = 1; i <= gridNumber; i++) {
    const gridSquares = document.createElement('div');
    gridSquares.classList.add('gridSquares');
    /* this penMode check allows the user to exit the grid and select other options without adding more
        colored divs */
    gridSquares.addEventListener('click', function(e) {
        penMode = !penMode;
        if(penMode) {
            gridSquares.style.backgroundColor = currentColor;
        }
    });
    gridSquares.addEventListener('mouseover', function(e) {
        if (penMode == true) {
            e.target.style.backgroundColor = currentColor;
        }
    });
    gridSpace.appendChild(gridSquares);
}

/* MENU INITIALIZATION */
/* slider */
let slider = document.getElementById("sizeRange");
let output = document.getElementById("demo");
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  gridSize = this.value;
  resetGrid();
}

/* color buttons */
const colorButtonList = document.createElement('div');
colorButtonList.classList.add('colorButtonBar');
for(let i = 0; i < colorArray.length; i++) {
    const colorButton = document.createElement('button');
    colorButton.classList.add('colorButton');
    colorButton.textContent = '';
    colorButton.addEventListener('click', function(e) {
        currentColor = colorArray[i];
        updateMessage();
    });
    colorButton.style.backgroundColor = colorArray[i];
    colorButtonList.appendChild(colorButton);
}
menuBar.appendChild(colorButtonList);

/* random color button */
let randomColor = document.createElement('button');
randomColor.classList.add('menuButton');
randomColor.textContent = 'RANDOM COLOR';
randomColor.addEventListener('click', function(e) {
    randomBackgroundColor = '#' + (Math.floor(Math.random()*16777215).toString(16));
    currentColor = randomBackgroundColor;
    updateMessage();
});
menuBar.appendChild(randomColor);

/* opacity buttons */
let opacityButtonList = document.createElement('div');
opacityButtonList.classList.add('opacityButtonBar');
for (let i = 0; i < opacityArray.length; i++) {
    const opacityButton = document.createElement('button');
    opacityButton.classList.add('opacityButton');
    let currentColorOpacity = currentColor + opacityArray[i];
    opacityButton.textContent = opacityArray[i] + '%';
    opacityButton.addEventListener('click', function(e) {
        currentColor = currentColorOpacity;
        updateMessage();
    })
    opacityButton.style.backgroundColor = currentColorOpacity;
    opacityButtonList.appendChild(opacityButton);
}
menuBar.appendChild(opacityButtonList);

/* eraser */
const eraserButton = document.createElement('button');
eraserButton.classList.add('menuButton');
eraserButton.textContent = 'ERASER';
eraserButton.addEventListener('click', function(e) {
    currentColor = 'transparent';
    modeMessage.textContent = 'You are erasing.';
    menuBar.appendChild(modeMessage);
}); 
menuBar.appendChild(eraserButton);

/* reset button */
let resetButton = document.createElement('button');
resetButton.classList.add('menuButton');
resetButton.textContent = 'RESET CANVAS';
resetButton.addEventListener('click', resetGrid);
menuBar.appendChild(resetButton);

/* current color and mode */
let modeMessage = document.createElement('div');
modeMessage.classList.add('modeMessage');

/* METHOD FUNCTIONS: basic functions used to reset the grid every time it is updated */
function resetGrid() {
    gridNumber = Math.pow(gridSize, 2);
    currentColor = '';
    removeAllChildNodes(gridSpace);
    makeGrid(gridNumber);
}

function makeGrid(gridNum) {
    let newSquareSize = 1000 / gridSize;
    for (let i = 1; i <= gridNum; i++) {
        const gridSquares = document.createElement('div');
        gridSquares.classList.add('gridSquares');
        gridSquares.addEventListener('click', function(e) {
            penMode = !penMode;
            if(penMode) {
                gridSquares.style.backgroundColor = currentColor;
            }
        });
        gridSquares.addEventListener('mouseover', function(e) {
            if (penMode == true) {
                e.target.style.backgroundColor = currentColor;
            }
        });
        gridSquares.style.width = newSquareSize + 'px';
        gridSquares.style.height = newSquareSize + 'px';
        gridSpace.appendChild(gridSquares);
        modeMessage.textContent = 'You reset the canvas. Select a color!';
        menuBar.appendChild(modeMessage);
    }
}

function updateMessage() {
    modeMessage.textContent = 'Your current color is ' + currentColor + '.';
    menuBar.appendChild(modeMessage);
}

/* removes all children nodes from parent. here is used to clear colored grid */
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}