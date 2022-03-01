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
        squares.setAttribute('onmouseover', 'draw()');
        squares.setAttribute('onmouseover', 'draw(this)');
    }
}

// Add the "active" class to only divs with a "box" class
let squares = document.getElementsByClassName('grid-item');
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('mouseover', function draw(e) {
    // Used event delegation to target children of the grid
    if(e.target.matches('grid-item')) {
      e.classList.add('active');
    }
  }, false);
}

function draw(e) {
    if(e.classList.contains('grid-item')) {
      e.classList.add('active');
    }
   }

makeRows(16, 16);

function newGame(e) {
  if(e.classList.contains('.grid-item.active')) {
    e.classList.disabled('.active')
  }
}

let activeGrid = document.getElementsByClassName('.grid-item.active');
if(activeGrid) {
  for (let i = 0; i < squares.length; i++) {
      activeGrid[i].addEventListener('click', newGame());
  }
}
for (let i = 0; i < squares.length; i++) {
  activeGrid[i].addEventListener('click', function newGame(e) {
    if(e.classList.contains('.grid-item.active')) {
      !e.classList.add('.active');
    }
  }, true);
}

// newGame();