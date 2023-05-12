---
title: recursion!
publish_date: 2023-05-10
disable_html_sanitization: true
--- 
<font>as i begin this blog again, i am reminded of my love for stardew valley. particularly the four seasons in which
the game is experienced. for that reason, i wanted to make a piece of net art that encapsulated the rainy day that one experiences both in stardew valley.</font>
<br>
<iframe width="560" height="315" src="https://www.youtube.com/embed/yrRCGNMTTFo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<br>

<font>i first added rain drops (5x5 squares) to float across the screen diagonally from right to left, making sure that the rain would render last, so as to be 'above' all other parts of the screen.</font>


```js
class RainDrop {

    constructor() {
        // variable x and y locations to render the raindrops randomly OFF the canvas, 
        // so they can 'fall' over the canvas
        const x = Math.random() * (cnv.width + 500)
        const y = Math.random() * -110
        // randomize raindrop size parameter between a diametre of 0 and 7px
        const hw = Math.random() * 7
        this.pos = {x, y, hw}
        // diagonal downward velocity from right to left
        this.vel = {x: -5, y: 7}
    }

    // update function to be place in the draw() js script
    update () {
        this.pos.x 
        this.pos.y 
        // updates the raindrop to move in the direction of the velocity declared
        this.pos.x += this.vel.x
        this.pos.y += this.vel.y
    }

    // draws the raindroplets in the pixel art style - squares of random sizes
    renderWater() {
        ctx.fillRect(this.pos.x, this.pos.y, this.pos.hw, this.pos.hw)
    }
```
<font>to make the raindrop shape look like it was 'flying' through the air, i turned renderWater() into a recursive function that drew the raindrop upon the droplet(corner of the square) at a smaller height and width. the function was then renamed, 'recursiveWaterRender()'. i used the 'tailFactor' variable in a 
conditional function to stop(return) the recursion after a certain amount of recursion cycles, so as not to receive an error. </font>

```js
        recursiveWaterRender(tailFactor) {

                // assign a colour the the square
                ctx.fillStyle = 'skyblue'
                // draw a square and set the position to the upper right hand side of the square.
                // use tailFactor as a parametre for controlling recursion amount
                ctx.fillRect(this.pos.x + (this.pos.hw + tailFactor), this.pos.y - (this.pos.hw + tailFactor), this.pos.hw - tailFactor/5, this.pos.hw - tailFactor/5)

                // condition the recursion to end once tailFactor has reached a value of over 20
                if (tailFactor > 20) return

                // if tailFactor is not yet above the value of 20, call this function once more inside itself, making a
                    //smaller square to the upper right hand corner of the previous square 
                this.recursiveWaterRender(tailFactor + 5) 
        }

        // for the following functionality of the offScreen() function, refer to the code at the next section down
        // call this boolean function inside  once the rain droplet has reached a point that is off the canvas, so as to not    cause the browser to eventually start panting
        offScreen() {
            return (this.pos.y > cnv.height + this.pos.hw);
        }

```
<font>finally, in the sketch.js file, i used everything from the RainDrop() class to push raindrops onto the canvas by creating a 'rain' array</font>

```js
function draw_frame () {
    //raindrops
    let rain = []

    // add the raindrops to the rain array from the RainDrop() class
    rain.push(new RainDrop())

    // apply functions to RainDrop() objects, making them move (update()) and look cool (recursion())
    for (droplet of rain) {
        droplet.update()
        droplet.recursiveWaterRender(1)
    }

    // remove objects from the array that have y positions no longer on the canvas.
    // eliminates excessive computer energy usage
    for (let i = rain.length - 1; i >= 0; i--) {
        if (rain[i].offScreen()) {
            rain.splice(i, 1);
        }
    }

    // check to see if the amounts of RainDrops are not growing, i.e. slowing the computer
    console.log(rain.length)

    // recursively call itself for ongoing animation
    requestAnimationFrame (draw_frame)
}
```
<font>
        for the smoke leaving the chimney, i applied the same principal of the raindrops, but did not use recursion, and removed the smoke particles at the top of the screen. velocities and square rendering positions were also adjusted for the narrow upward smoke movement
</font>











