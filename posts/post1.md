---
title: my introduction to two-dimensional worlds
publish_date: 2023-03-27
disable_html_sanitization: true
--- 
<font size="8">a</font><font size="5">s a small child, i always enjoyed sitting in awe over my older brother's shoulder while he figured out how to play <span style="color:skyblue">*super mario land two: six golden coins*</span> on his recently acquired, <span style="color:red">*nintendo gambeboy*.</span> 
my mind - along with the minds of many of other youngins - was completely blown by the beautiful and evocative art of video game design. growing up in a farming family as the youngest of four, the concept of an entire world being programmed behind a pixelated screen the size of my mum's nursing pager was often met with belittlement as i was sent outside to fix the cattle-troph leak for the thirteenth time that summer. 

![super mario land two: world map](./images/sml2sgc.jpg)

i remained hooked on these digital fantasies... 
on the condition that i would attend pony club, i told my mum that i wanted to buy a <span style="color:blue">*gameboy advance sp*</span> with the money i had saved. i would go hide in the horse float during show-jumping meets playing <span style="color:skyblue">*yoshi's island*</span> for as long as i could until i was caught out. apart from the hurt i felt when my passion for these activities was subtly shunned by my parents, am thankful for my upbringing in 'reality', as it informs the stories i am inspired to pass on when designing my own digital worlds. my embrace of what was thought of as mere 'escapism' rendered a soft-spot in my heart for video games, especially for those in the style of two dimensions.

<iframe width="560" height="40" src="https://www.youtube.com/embed/Cfw85wT13Bg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

i am immensely grateful to have experienced a versatile first twenty-eight years of my three-dimensional life that helps cultivate my inspiration for designing two-dimensional games: 

**open world adventures**
- _ frequently travelling through the united states, touring with music and visiting family
- _ visiting japan as much as i can
- _ (<span style="color:green">*the legend of zelda: a link to the past*</span>)
- _ (<span style="color:#FFC000">*pokemon yellow*</span>) 
- _ (<span style="color:skyblue">*hyper light drifter*</span>)
- _ (<span style="color:red">*pikuniku*</span>)
- _ (<span style="color:pink">*untitled goose*<span>)

**farming** 
- _ raising cattle
- _ fixing stuff
- _ planting a lot of native trees
- _ shovelling and chopping stuff
- _ etc
- _ (<span style="color:green">*stardew valley*</span>)

<iframe width="560" height="315" src="https://www.youtube.com/embed/NjvFF2Kvx1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

**running a family bed and breakfast** 
- _ cleaning
- _ relationships with new people all the time
- _ (<span style="color:orange">*the sims*</span>)
- _ (<span style="color:blue">*animal crossing*</span>)

- _ the list elaborates and goes on.

by reading the above list, one can correctly assume that i have cultivated an affinity for isometric art. isometric art is a drawing or illustration style that makes two-dimensional figures appear three dimensional. in three dimensional game designs such as <span style="color:pink">*untitled goose*</span>, <span style="color:orange">*the sims*</span> and <span style="color:blue">*animal crossing*</span>, the concept of isometric art remains, as any point-perspective in the three-d art is eliminated. growing up with limited access to video games, i started out just (mostly) playing old-school titles that did not belong to three-d platforms like the <span style="color:red">*nintendo sixty-four*</span>. as much as i love and appreciate playing three-d games, my current drive to create isometric worlds comes from this limitation that i was presented with as a smaller boy. 

so that is a glimpse of the seed that germinated into my passion for the gargantuan pursuit of game design. ◡̈

**an online farm simulator**

recently i came upon  <span style="color:orange">*florp farming*</span>, which is a drag-n-drop farm simulator made with <span style="color:orange">*p5.js*</span>. the main thing i love about the game is the satisfaction of automating the farming process and discovering new items as you go, much like <span style="color:green">*stardew valley*</span>). 

a really frustrating part of the game is the fact that you need to drag and drop every signle element you want to sell in order to make money.

![florp farming start page](./images/florp.png)

here is a simple p5 example of dragging and dropping. 

<iframe width="500" height="543" src="https://editor.p5js.org/le_4TC/full/5Iuaw19Z7"></iframe>

here is a // runthrough of what is going on in the drag-n-drop code.

```js
// defining class as Circle
class Circle {
// the constuctor creates and initializes an object instance of the class, Circle
  constructor(x,y,r) {
    this.p = createVector(x,y)
    this.r = r
  }
// the draw method uses parametres from the constructor in order to creat a cirlce on the canvas
  draw() {
    circle(this.p.x, this.p.y, this.r)
  }
  
}
// the setup function is used to define initial properties of the program 
// when it begins
function setup() {
  hover = null
  grabbed = null
  d = 500
// this creates a canvas with height and width being d -> 500px  
  createCanvas(d, d)
  ellipseMode(RADIUS)
  circles = []
  for (let i = 0; i < 3; i ++) {
    circles.push(new Circle(random(width), random(height), random(10,50)))
  }
}
// the draw function perpetually loops the lines of code that is inside the function's block
function draw() {
  m = createVector(mouseX, mouseY)
  hover = null
  for (let c of circles) {
    if (m.dist(c.p) < c.r) {
      hover = c
    }
  }
// this renders a white background  
  background('white')
// this makes the circles have no outline  
  noStroke()
// this condotional method is used to change the display of the cursor   
  if (hover) cursor('grab')
  else cursor(ARROW)
// this for loop   
  for (let c of circles) {
    if (c == grabbed) fill(50)
    else if (c == hover) fill(100)
    else fill(0)
    c.draw()
  }
}

function mousePressed() {
  if (hover) {
    grabbed = hover
  }
}

function mouseReleased() {
  grabbed = null
}

function mouseDragged() {
  if (grabbed) {
    grabbed.p.add(createVector(movedX, movedY))
  }
}
```

--- 
</font>
