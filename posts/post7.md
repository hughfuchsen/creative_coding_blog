---
title: sprite animation in .js
publish_date: 2023-06-02
disable_html_sanitization: true
--- 
<font>
        in my last project, i briefly touched on javascript sprite animations with my hills hoist. this time i 
        wish to go into more detail about how i animated some characters for a game i made for my nieces and nephews.
</font>

![pixel art foundation](./images/runforveg.gif)

<font>
        first, i made a character object
</font>

```js
class Character {
  // construct the image
  constructor(imageSrc, spriteWidth, spriteHeight, x, y) {
    this.image = new Image(); // create a new Image object
    this.image.src = imageSrc; // set the source of the image
    this.spriteWidth = spriteWidth; // width of each sprite frame
    this.spriteHeight = spriteHeight; // height of each sprite frame
    this.x = x; // x-coordinate of the character's position
    this.y = y; // y-coordinate of the character's position
    this.width = 60; // width of the character's image on the canvas
    this.height = 120; // height of the character's image on the canvas
    this.animationFrame = 0; // current frame of animation
    this.frameCounter = 0; // counter to keep track of frames
    this.animationDelay = 5; // adjust this value to control animation delay (speed)
  }

  draw() {
    // calculate the source position of the current frame in the sprite sheet
    const srcX = this.animationFrame * this.spriteWidth; // calculate x-coordinate of the frame
    const srcY = 0; // y-coordinate of the frame
    
    ctx.drawImage(
      this.image, // image object to draw
      srcX, // x-coordinate of the source frame
      srcY, // y-coordinate of the source frame
      this.spriteWidth, // width of the source frame
      this.spriteHeight, // height of the source frame
      this.x, // x-coordinate on the canvas to draw the character
      this.y, // y-coordinate on the canvas to draw the character
      this.width, // width of the character on the canvas
      this.height // height of the character on the canvas
    );
  }

  animate() {
    this.frameCounter++; // increment the frame counter
    if (this.frameCounter >= this.animationDelay) {
      // ensure that the value of animationFrame is kept within the range of 0 to 3 (4 frames before looping)
      // ensure that the next sprite is being accessed on the sprite sheet as draw_frame() loops the draw() function
      this.animationFrame = (this.animationFrame + 1) % 4; // increment and wrap around to 0 if it reaches 3
      this.frameCounter = 0; // reset the frame counter
    }
  }
}
```

<font>
        i then instantiated the object and used the object's methods in the draw_frame() function
        to animate the character
</font>

```js

let animationRunning = true; // 

const character1 = new Character('images/clayAnim.png', 160, 320, cnv.width / 10, cnv.height / 3 * 2 + (cnv.height));
//instantiate the character object



function draw_frame() {// define the function that will draw frames


    if (animationRunning) {
    character1.animate(); // extract the next image on the sprite sheet to plug into draw()
  }

  character1.draw(); // draw the animation frame

  
  requestAnimationFrame(draw_frame);// recursively call draw_frame() for ongoing animation
}

```
















