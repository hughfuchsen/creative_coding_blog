---
title: recursion!
publish_date: 2023-05-10
disable_html_sanitization: true
--- 
<font size="8">as i begin this blog again, i am reminded of my love for stardew valley. particularly the four seasons in which
the game is experienced. for that reason, i wanted to make a piece of net art that encapsulated the rainy day that one experiences both in stardew valley.</font>
<br>
<iframe width="560" height="315" src="https://www.youtube.com/watch?v=yrRCGNMTTFo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
<br>

i first added rain drops (5x5 squares) to float across the screen diagonally from right to left, making sure that the rain would render last, so as to be 'above' all other parts of the screen.
```js
class RainDrop {

    constructor() {
        // variable x and y locations to render the raindrops randomly OFF the canvas, so they can 'fall' over the canvas
        let x = Math.random() * (cnv.width + 500)
        let y = Math.random() * -110
        // randomize raindrop size parameter between a diametre of 0 and 7px
        let hw = Math.random() * 7
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


<canvas id=rainDropExample></canvas>

<script type=module>
    const cnv = document.getElementById (`rainDropExample`)
    cnv.width = cnv.parentNode.scrollWidth
    cnv.height = cnv.width * 9 / 16


    const ctx = cnv.getContext ('2d')

    // calculating the dimension
    // for the Shrinker objects
    // the aspect ratio is 16:9
    // so this will act as both
    // the width and height
    const w = cnv.width / 16

    requestAnimationFrame (draw_frame)

    // rain
    let rain = []

    // define the function that will draw frames
    function draw_frame () {

        background('green')    

        //raindrops

        rain.push(new RainDrop())

        for (droplet of rain) {
            droplet.update()
            droplet.recursiveWaterRender(1)
            
        }

        // check to see if the amounts of RainDrops are not growing, i.e. slowing the computer
        // console.log(rain.length)
        for (let i = rain.length - 1; i >= 0; i--) {
            if (rain[i].offScreen()) {
                rain.splice(i, 1);
            }
        }

        // recursively call itself for ongoing animation
        requestAnimationFrame (draw_frame)

    }



    class RainDrop {

        constructor() {
            let x = Math.random() * (cnv.width + 500)
            let y = Math.random() * -100 - 10
            let hw = Math.random() * 7
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











