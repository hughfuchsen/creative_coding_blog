---
title: sprite collisioin
publish_date: 2023-06-02
disable_html_sanitization: true
--- 
<font>
        collision detection of my character in .js was next on my list. similar to the character object class,
        i made a class for an obstacle object that moved accross the screen. (refer to the sprite animations post)
</font>

![pixel art foundation](./images/runforveg.gif)

<font>
        in addition to drawing, jumping, updating and constructing the character in the character class,
        i also made a function that retrieved the boundaries of the sprite, then another function that 
        checked if a collision was made.
</font>

```js
getBounds() {
    return {
      x: this.x,// return the x position of the sprite in question
      y: this.y,// return the y position of the sprite in question
      width: this.width,// return the width of the sprite in question
      height: this.height// return the height of the sprite in question
    };
  }

  // check to see if the obstacle (object parametre) has collided with the character!
  checkCollision(object) {
    const characterBounds = this.getBounds(); // instantiate all of the boundary co-ordinates in Character()
    const objectBounds = object.getBounds();// instantiate all of the boundary co-ordinates os the Ostacle() object
                                            // (obstacle will be passed in later in draw_frame())


    // conditional statement to see whether the character boundaries and obstacle boundaries have over-lapped
    if (
      characterBounds.x < objectBounds.x + objectBounds.width &&
      characterBounds.x + characterBounds.width > objectBounds.x &&
      characterBounds.y < objectBounds.y + objectBounds.height &&
      characterBounds.y + characterBounds.height > objectBounds.y
    ) {
      return true; 
    }

    return false; // return true or false in order to execute further code (go to draw_frame()->check collision)
  }
```

<font>
        i then instantiated the character objct as well as an obstable object.

        
</font>

```js
// instantiate character object
const character1 = new Character('images/clayAnim.png', 160, 320, cnv.width / 10, cnv.height / 3 * 2 + (cnv.height));
// instantiate obstacle object
const obstacle = new Obstacle('images/sadFace.png', cnv.width, cnv.height / 3 * 2, 2);


function draw_frame() {// define the function that will draw frames


  character1.update(); //update the character's position
  obstacle.update(); // update the obstacle object to move towards the character
  

  // check collision
  if (character1.checkCollision(obstacle)) {
    // input desired code if collision occurs
    console.log('COLLISION!!!');
  }

  character1.draw(); // draw the character
  obstacle.draw(); // draw the moving obstacle
  
  requestAnimationFrame(draw_frame);// recursively call draw_frame() for ongoing animation
}

```
















