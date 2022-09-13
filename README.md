# wm-paint
Paint tool developed in javascript alongside the Odin Project

## Basic Functionality
I added basic functionality as described in the Odin Project Etch-a-Sketch page, found here: https://www.theodinproject.com/lessons/foundations-etch-a-sketch
Additionally, I added a slider at the top that determined the number of pixels in the canvas, with a minimum of 4 and a maximum of 100.
#### Future Changes to Implement
<ul>
<li>Add more pen colors</li>
<li>Add eraser function</li>
<li>Add pixel borders without interfering with canvas. Right now, adding a border adds to the div container, pushing the last few divs in a row to the next row.</li>
<li>Add reset button</li>
</ul>


## Basic UI Update
I added more functionality and a basic user interface - the program is now centered and has a working menu bar. The menu bar has pen colors to choose from, a slider for scaling the size of each pixel on the canvas, and a reset button so that users can add more than one color to the canvas at a time. 
#### Future Changes to Implement
<ul>
<li>Add a full color wheel for picking colors.</li>
<li>Add eraser functionality (is currently the color "white").</li>
<li>Add a pixel border toggle button</li>
<li>Add background and more aesthetically pleasing UI</li>
</ul>


## UI Update + Button Functionality
I added a few more buttons to play around with: grayscale, random color, and erasers. Currently, the Eraser has the same functionality as selecting the white pen because the website background color is white - in the future, I will add a paper-textured background to draw over. 

The way pixels are added to the canvas also changed: Instead of a mouseover event, the user now toggles between the pen touching the canvas, allowing the user to move their mouse cursor off the canvas without adding extra pixels or erasing anything.

For now, this project is done, and I anticipate returning to this project after finishing the JavaScript TOP course.
#### Future Changes to Implement
<ul>
<li>Add a full color wheel for picking colors. This is currently beyond the scope of my learning and I will have to open a new branch</li>
<li>Add a pixel border toggle button. Currently the border pushes the elements out of the canvas square</li>
<li>Add background</li>
<li>Change grayscale functionality --> additive opacity rather than opaque</li>
<li>Add grayscale slider</li>
</ul>
