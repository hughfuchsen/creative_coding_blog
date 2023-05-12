---
title: audio api!
publish_date: 2023-05-10
disable_html_sanitization: true
--- 
<font>
    designing a rainy day with javascript was going well. i wanted to have a go at designing some sort of sythesised wind the audio api. 
    taking code from thomas capogreco's blog on web audio api synthesis, i was able to create a soundscape that fit well with the saturated isometric pixel art design
</font>
<br>
<font>    
    first i made an audio context, and linked that context with a html button nested in a </font>
    ```<div>```
   <font> element in order to start and stop the function. the amp_node variable is discussed in the next paragraph.
</font>

```js
        // get and suspend audio context
        const audio_context = new AudioContext ()
        audio_context.suspend ()
  
    
        // this is the async click handler function 
        async function init_audio () {
    
            // wait for audio context to resume
            await audio_context.resume ()
        }
    
        // get the button and store it in a variable
        const btn = document.getElementById ('tone_switch')
        btn.innerText = 'Press for wind sound!' // button text!
        btn.value = 'off'                 // give it a value

        // declare a function for toggling the sound
        function toggle_sound () {
            // if button value is 'off'
            if (btn.value == 'off') {

                // set the gain to 0.1
                amp_node.gain.value = 0.1

                // set the value to 'on'
                btn.value = 'on'

                // change the text
                btn.innerText = 'Press to stop!'
            }

          // if button value is `on`
          else if (btn.value = 'on') {

              // set the gain to 0
              amp_node.gain.value = 0

              // set the value to `off`
              btn.value = 'off'

              // change the text
              btn.innerText = 'Press for wind sound!'
          }
      }
```


<font>    
    then, i created the gain node and connected it to five different sine wave ocsillator nodes of varying frequencies. the varying freqs. were made to encapsulate 'windy overtones' by using the ```setValueAtTime()``` function.
    <br> 
    different frequencies and time values would be eventually calculated using the ```linearRampToValueAtTime()``` function, later on.
</font>

```js
      // store 5 new oscillator nodes in a variable
      const osc_node = audio_context.createOscillator ()
      const osc_node2 = audio_context.createOscillator ()
      const osc_node3 = audio_context.createOscillator ()
      const osc_node4 = audio_context.createOscillator ()
      const osc_node5 = audio_context.createOscillator ()

      // assign the ocsillator type to sine
      osc_node.type = 'sine'
      osc_node2.type = 'sine'
      osc_node3.type = 'sine'
      osc_node4.type = 'sine'
      osc_node5.type = 'sine'

      // this is the initial oscillations per second
      // or Hertz (Hz)
      // of the oscillators
      osc_node.frequency.setValueAtTime(160, audio_context.currentTime)
      osc_node2.frequency.setValueAtTime(200, audio_context.currentTime)
      osc_node3.frequency.setValueAtTime(500, audio_context.currentTime)
      osc_node4.frequency.setValueAtTime(700, audio_context.currentTime)
      osc_node5.frequency.setValueAtTime(100, audio_context.currentTime)

      // store a new gain/amplifier node in a variable
      const amp_node = audio_context.createGain ()

      // set the gain of that node to 0
      // ie. don't let any sound through
      amp_node.gain.setValueAtTime(0, audio_context.currentTime)

      // connect the oscillator node
      // to the gain node
      osc_node.connect (amp_node)
      osc_node2.connect (amp_node)
      osc_node3.connect (amp_node)
      osc_node4.connect (amp_node)
      osc_node5.connect (amp_node)

      // connect the gain node to
      // the audio output device
      // on the audio context
      amp_node.connect (audio_context.destination)

      // start the oscillator
      osc_node.start ()    
      osc_node2.start ()    
      osc_node3.start ()    
      osc_node4.start ()    
      osc_node5.start ()    
```
<font>    
    finally, i created a new variable that would store a random oscillator frequency between 160 and 180 Hz - giving the wind tones a 20Hz range.
    <br>
    for all of the oscillator nodes, i used the ```newFrequency``` variable, plus a certain value in order to scale multiple tones upon one-another. then i set these variable values as parametres to the ```linearRampToValueAtTime()``` function.
    <br>
    all of this code was put inside the function called ```updateFrequency()```, which i could then apply as a parametre to the 
    ```setInterval()``` function. the wind frequency was then able to slide to a random random value at a random time interval!
    <br>
    this was my attempt at generating one of natures most beautiful, yet chaotic and annoying phenomenons...
</font>

```js
      // define a function to update frequency every two seconds for WIND HOWL
      function updateFrequency() {
        // generate a random frequency between 160 and 180 Hz
        const newFrequency = Math.floor(Math.random() * 180) + 160;

        // ramp frequency to new value over 2 seconds
        osc_node.frequency.linearRampToValueAtTime(newFrequency, audio_context.currentTime + 2);
        osc_node2.frequency.linearRampToValueAtTime(newFrequency+200, audio_context.currentTime + 2);
        osc_node3.frequency.linearRampToValueAtTime(newFrequency+700, audio_context.currentTime + 2);
        osc_node4.frequency.linearRampToValueAtTime(newFrequency+1000, audio_context.currentTime + 2);
        osc_node5.frequency.linearRampToValueAtTime(newFrequency+600, audio_context.currentTime + 2);
      }

      // call updateFrequency() every 0.5 to 0.7 seconds using setInterval()
      setInterval(updateFrequency, Math.random() * 700 + 500);


```
<script>
  
</script>














