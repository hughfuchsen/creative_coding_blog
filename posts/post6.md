---
title: isometric pixel art!
publish_date: 2023-05-10
disable_html_sanitization: true
--- 
<font>
        creating the pixel art was a slightly laborious process, but it all came together in the end. to make the task easier,
        i created a base level function that drew lines of pixes, incrementing up or down one pixel every two pixels wide.
</font>

![pixel art foundation](./images/pixelbase.png)

```js
// Build a fundamental rectangle that is later used to be drawn out in the build_wall_layer() function
function rectangle_base (x_pos, y_pos, base_width, base_height) {
    const h = base_height / 2
    const x = x_pos - h
    const y = y_pos - h
    
    ctx.fillRect (x, y, base_width, base_height)
}

// foundational function that can draw the 10px by 5px squares in diagonal line formations


    // direction is set to 1 or -1 to determine whether the pixelated line is in an upward or downward direction
    // x_off_set and y_off_set are parametres used to alter to position the squares onto the desires canvas location. 

function build_wall_layer (x_off_set, y_off_set, direction, wall_height, wall_length, wall_color) {
    //wallHeight is set as a parametre for the for loop
    for (let j = 0; j < wall_height; j++) {
        // then the same is done for wall length in the indented for loop to make this
        // foundation easy to manipulate
        for (let i = 0; i < wall_length; i++) {
            
            // set the colour of the set of pixel art
            ctx.fillStyle = wall_color        
            
            // call the rectangle_base function to draw the iterated rectangle 
            rectangle_base ((cnv.width / 2) + (10 * i) + x_off_set, (cnv.height / 2) + (5 * direction * i) - (j * 5)+ y_off_set, 10, 5)
        }
    } 
```

<font>
        
</font>

<script>
  
</script>



<script type=module>
   
</script>











