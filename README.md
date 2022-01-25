# Etch-N-Sketch
/JavaScript
-Created gameDisplay parameters and 16x16 grid.

/HTML
-Created game sections.
-Added additional divs under #dashboard

/CSS
-Created ‘dead-space’ div to be used as a flex in CSS detail.
-Added buttons for RESET, SETTINGS, CLASSIC, COLOR!


# Current issues:
-NA


***FIXED***
Thanks Matt Harris!
<!-- // Add the "active" class to only divs with a "box" class
let squares = document.getElementsByClassName('grid-item');
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener('click', function draw(e) {
    // Used event delegation to target children of the grid
    if(e.target.matches('grid-item')) {
      e.classList.add('active');
    }
  }, false);
}

Does not currently draw. Trying to add classList ‘active’ from CSS to the existing ‘grid-item’ class using ‘onclick’. 

Uncaught ReferenceError: draw is not defined
	at HTMLDivElement.onclick -->

# Next Steps:
-Create Reset() function.
  *Function should allow for reset on both game styles without resetting to default color (dot matrix).
-Create and option for the EU to select the number of tiles to populate on the grid. 
  *Up to 100 tiles.
-Create Classic function.
  *"Default" setting that will operate independently from reset.
-Create a 'random color' option.
  *When color button is pressed, screen color turns light grey (LCD Crystal Screen).
