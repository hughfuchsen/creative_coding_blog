---
title: ears
publish_date: 2023-03-27
disable_html_sanitization: true
--- 
<font size="8">m</font><font size="5">y strengths lie in making melodies over musical chord progressions. singing melodies is a form of catharsis for me that i would absolutely go off the rails without. a biproduct of singing in order to relax is that i have developed a taste for the tone and form of melodies that could inform what is being communicated through music. of course, this is entirely subjective, but it fuels my creative drive to compose both lyrical folk music and instrumental video game soundtracks.

**some of my favourite singers:**
- _ aldous harding
- _ ella fitzgerald
- _ buck owens
- _ sarah vaughan
- _ chet baker
- _ deep forest (weird forest nymph voice)
- _ paul mccartney
- _ bjork
- _ mason ramsay (yodeling walmart kid)

> "the only thing better than singing is more singing." - ella fitzgerald

**some of my favourite video game sountracks:**
- _ super mario sixty-four
- _ all of the games mentioned in my 'introduction to two-dimensional worlds' blog

<iframe width="560" height="40" src="https://www.youtube.com/embed/wj6eoK5fVGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

**some of my folk music:**


<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2844226812/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/track=3427476574/transparent=true/" seamless><a href="https://hughfuchsen.bandcamp.com/album/do-you-have-a-minute">Do You Have a Minute? by Hugh F</a></iframe>



**adaptive soundtrack aspirations**

videogames with adaptive soundtracks have always fascinated me, so i love doing the same thing with my own music. something as simple as adding a drumbeat onto the song when you enter a new area in the game is so effective in utilising the same song, yet presenting a whole extra layer of art direction. the two soundcloud tracks are examples of an adaptive soundtrack i am working on. 

the challenge for me is figuring out a way to program this into my game designs, as i am yet to do it. 

◡̈

here is an adaptive track from a game i am making, showcasing the map() function in p5js. the idea is that the 
player will walk into a different area in the game and the tracks will crossfade one-another to give a change 
in atmosphere... it is alot of fun! 

(click it) (sound on)
<iframe width="500" height="543"  src="https://editor.p5js.org/hughfuchsen/full/7kXZOHGG4"></iframe>



the map() function is really handy to test the crossfading of the adaptive track. i was always just soloing each track in logic pro, but this allows me to hear the fade! 

```js
let beep, beep2;
let playing = false;
let slider;

function preload() {
  beep = loadSound("general1.mp3");
  beep2 = loadSound("general2.mp3");
}

function setup() {
  createCanvas(500, 500);
  beep.loop();
  beep2.loop();
  beep.play();
  beep2.play();

  slider = createSlider(0, 100, 50);
  slider.position(200, 250);
  slider.style("width", "80px");

  colorMode(HSL, 100);
  rainbow = createImage(width, height);
  rainbow.loadPixels();
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let h = map(i, 0, width, 0, 100);
      rainbow.set(i, j, color(h, 100, 70));
    }
  }
  rainbow.updatePixels();
}

function draw() {
  background(220);
  image(rainbow, 0, 0);


// MAP function!!!!
// syntax: map(value, start1, stop1, start2, stop2, [withinBounds])
// was able to cross-fade the two volume 
// values by inverting the start2 and stop2 values from vol2

  let sliderVal = slider.value();
  let vol1 = map(sliderVal, 0, 100, 1, 0);
  let vol2 = map(sliderVal, 100, 0, 1, 0);

  beep.amp(vol1);
  beep2.amp(vol2);

}

function mousePressed() {
  if (!playing) {
    beep.play();
    beep2.play();
    playing = true;
  }
}
```
--- 
</font>










