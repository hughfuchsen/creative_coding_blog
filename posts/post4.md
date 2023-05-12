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

i first added rain drops (5x5 squares) to float across the screen diagonally from right to left, making sure that the rain would render last, so as to be 'above' all other parts of the screen.


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
to make the raindrop shape look like it was 'flying' through the air, i turned ```renderWater()``` into a recursive function that drew the raindrop upon the droplet(corner of the square) at a smaller height and width. the function was then renamed, ' ```recursiveWaterRender()``` '. i used the ```tailFactor``` variable in a 
conditional function to stop(```return```) the recursion after a certain amount of recursion cycles, so as not to receive an error. 
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

        // for the following functionality offScreen() function, refer to the code at the bottom of this page
        // call this boolean function inside  once the rain droplet has reached a point that is off the canvas, so as to not    cause the browser to eventually start panting
        offScreen() {
            return (this.pos.y > cnv.height + this.pos.hw);
        }

```
```js
    //raindrops

    rain.push(new RainDrop())

    for (droplet of rain) {
        droplet.update()
        droplet.recursiveWaterRender(1)
        
    }

    // check to see if the amounts of RainDrops are not growing, i.e. slowing the computer
    //console.log(rain.length)


    for (let i = rain.length - 1; i >= 0; i--) {
        if (rain[i].offScreen()) {
            rain.splice(i, 1);
        }
    }

    // recursively call itself for ongoing animation
    requestAnimationFrame (draw_frame)
```


<script>

class RainDrop {

        constructor() {
            // const x = Math.random() * (cnv.width + 500)
            // const y = Math.random() * -100 - 10
            const x = (cnv.width/2)
            const y = (cnv.width/2)
            const hw = Math.random() * 7
            this.pos = {x, y, hw}
            this.vel = {x: -5, y: 7}
            this.acc = {x: 0, y: 0}
        }

        update () {
            this.pos.x 
            this.pos.y 
            this.pos.x += this.vel.x
            this.pos.y += this.vel.y
        }

        renderWater() {
            ctx.fillRect(this.pos.x, this.pos.y, this.pos.hw, this.pos.hw)
        }

        recursiveWaterRender(tailFactor) {

                ctx.fillStyle = 'skyblue'

                ctx.fillRect(this.pos.x + (this.pos.hw + tailFactor), this.pos.y - (this.pos.hw + tailFactor), this.pos.hw - tailFactor/5, this.pos.hw - tailFactor/5)

                if (tailFactor > 20) return

                this.recursiveWaterRender(tailFactor + 5) 
        }

        offScreen() {
            return (this.pos.y > cnv.height + this.pos.hw);
        }

    }

</script>

<canvas id=rainDropExample></canvas>

<script type=module>

    const cnv = document.getElementById (`rainDropExample`)
    cnv.width = cnv.parentNode.scrollWidth
    cnv.height = cnv.width * 9 / 16


    const ctx = cnv.getContext ('2d')

  
    // rain
    const rain = []

    // define the function that will draw frames
    function draw_frame () {

        background('green')    

        //raindrops

        rain.push(new RainDrop())

        for (droplet of rain) {
            droplet.update()
            ctx.fillStyle = 'skyblue'
            droplet.renderWater()

            // droplet.recursiveWaterRender(1)
        }

        // // check to see if the amounts of RainDrops are not growing, i.e. slowing the computer
        // // console.log(rain.length)
        // for (let i = rain.length - 1; i >= 0; i--) {
        //     if (rain[i].offScreen()) {
        //         rain.splice(i, 1);
        //     }
        // }

        // recursively call itself for ongoing animation
        requestAnimationFrame (draw_frame)

    }

        requestAnimationFrame (draw_frame)

    function background (c) {
    ctx.fillStyle = c
    ctx.fillRect (0, 0, cnv.width, cnv.height)        
    }   


    

</script>











