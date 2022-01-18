// create game sections
var gameBoard = document.querySelector('#container');
var gameDisplay = document.createElement('div');
gameDisplay.setAttribute('id', 'display');
gameBoard.appendChild(gameDisplay);


// Dead space only exists to create space while using display: flex in CSS
var deadSpace = document.createElement('div');
deadSpace.classList.add('dead-space')
gameBoard.appendChild(deadSpace);


// creating gameDisplay parameters
const display = document.querySelector('#display');

function makeRows(rows, cols) {
    display.style.setProperty('--grid-rows', rows);
    display.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let squares = document.createElement('div');
        display.appendChild(squares).className = "grid-item";
        squares.setAttribute('onclick', 'draw()');
    }
}

// Add the "active" class to only divs with a "box" class
let squares = document.getElementsByClassName('grid-item');
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function draw(e) {
    // Used event delegation to target children of the grid
    if(e.target.matches('grid-item')) {
      e.classList.add('active');
    }
  }, false);
}

makeRows(16, 16);

// function reset() {
//     while (grid.firstChild) {
//       grid.removeChild(grid.lastChild);
//     }
//     createGrid(squareSize);
//   }


