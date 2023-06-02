---
title: sprite jump
publish_date: 2023-06-02
disable_html_sanitization: true
--- 
<font>
        i got my character animation going. then i wished to make the character jump when pressing a key
</font>

![pixel art foundation](./images/runforveg.gif)

<font>
        similar to my animation script, i made a character object (jumping version)
</font>

```js

let jumpHeight = 200; // adjust for a higher jump
let jumpSpeed = 15; // adjust for jump speed

class Character {
  constructor(imageSrc, spriteWidth, spriteHeight, x, y) {
    this.image = new Image();
    this.image.src = imageSrc;
    this.spriteWidth = spriteWidth;
    this.spriteHeight = spriteHeight;
    this.x = x;
    this.y = y;
    this.width = 60;
    this.height = 120;
    this.isJumping = false; //bool to see if character is jumping
    this.jumpDirection = 1; //determine the upward/downward movement of the 
    //                       jumping character when appropriate
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


  jump() {
    if (!this.isJumping) {
      this.isJumping = true;
      this.jumpDirection = 1;
    } // initiate the jump, then update() takes over!
  }

  update() {
    // update character position if jumping
    if (this.isJumping) {
      this.y -= jumpSpeed * this.jumpDirection;// upward movement
      if (this.y <= cnv.height / 3 * 2 - jumpHeight) {
        this.jumpDirection = -1; // downward movement, once jumpHeight is reached
      }
      if (this.y >= cnv.height / 3 * 2) {
        this.y = cnv.height / 3 * 2;
        this.isJumping = false;// stop the jump once player is down enough
      }
    }
  }
}
```

<font>
        i then instantiated the character obejct and made an event listener.
        a key pressed (KeyJ) in the event listener woudl call the jump() function in draw_frame(),
        making the character jump! 
</font>

```js

const character1 = new Character('images/clayAnim.png', 160, 320, cnv.width / 10, cnv.height / 3 * 2 + (cnv.height));

// add event listener for j press
document.addEventListener('keydown', function (event) {
  if (event.code === 'KeyJ') {
    character1.jump();
});

function draw_frame() {// define the function that will draw frames


  character1.update(); // update the character position if jumping  (if jump() is called)
  

  character1.draw(); // draw the jumping character

  
  requestAnimationFrame(draw_frame);// recursively call draw_frame() for ongoing animation
}

```
















