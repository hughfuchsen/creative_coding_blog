---
title: adventure to the pony zone
publish_date: 2023-03-28
disable_html_sanitization: true
--- 
<font size="8">a</font><font size="5">game i am currently building has a working title - *adventure to the pony zone*.
attpz is an open world adventure where the player's purpose is to solve riddles and puzzles in order to find people's. do so will reveal more about the people in the game, and also unlock certain aspects of the adventure.

here is a link to a prototype i am currently working on.

[title](https://www.example.com)

**scripting player movement in p5js**

one of the first challenges for me was figuring out the unity program interface, and how c# script (or any computer language for that matter) worked. i am confident moving forward however, because although it is all so daunting, i know that i have come a long way compared to when i started out. 

a simple excersise was to find out how to move the character by defining functions and using them in the update() method. 
in this case, the update() method is the draw() function.

<iframe width="500" height="543" src="https://editor.p5js.org/hughfuchsen/full/mzBUeeYRP"></iframe>

```js
let movingRight = false;
let movingLeft = false;
let movingUp = false;
let movingDown = false;

let xpos = 300;
let ypos = 300;
let moveSpeed = 5;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background("hotpink");

  // draw moving character
  fill("turquoise");
  ellipse(xpos, ypos, 75, 75);

  // update moving character
  if (movingRight) {
    xpos += moveSpeed;
  }
  if (movingLeft) {
    xpos -= moveSpeed;
  }
  if (movingUp) {
    ypos -= moveSpeed;
  }
  if (movingDown) {
    ypos += moveSpeed;
  }
}

function keyPressed() {
  if (key == "w" || keyCode == UP_ARROW) {
    movingUp = true;
  }
  if (key == "a" || keyCode == LEFT_ARROW) {
    movingLeft = true;
  }
  if (key == "s" || keyCode == DOWN_ARROW) {
    movingDown = true;
  }
  if (key == "d"|| keyCode == RIGHT_ARROW) {
    movingRight = true;
  }
}

function keyReleased() {
  if (key == "w" || keyCode == UP_ARROW) {
    movingUp = false;
  }
  if (key == "a" || keyCode == LEFT_ARROW) {
    movingLeft = false;
  }
  if (key == "s" || keyCode == DOWN_ARROW) {
    movingDown = false;
  }
  if (key == "d" || keyCode == RIGHT_ARROW) {
    movingRight = false;
  }
}

```
--- 
</font>










