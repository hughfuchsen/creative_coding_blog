---
title: adventure to the pony zone
publish_date: 2023-03-30
disable_html_sanitization: true
--- 
<font size="8">a</font><font size="5"> game i am currently building has a working title - *adventure to the pony zone*. 
i am building it in unity.
attpz is an open world adventure where the player's purpose is to solve riddles and puzzles in order to find people's ponies. doing so will reveal more about the people in the game, and also unlock certain aspects of the adventure.

![attpz](./images/attpz.png)


here is a link to a prototype i am currently working on.

[prototype3](https://sharemygame.com/@hughfuchsen/prototype3)

**scripting player movement in p5js**

one of the first challenges for me was figuring out the unity program interface, and how c# script (or any computer language for that matter) worked. 
i am confident moving forward however, because although it is all so daunting, i know that i have come a long way compared to when i started out. 

a simple excersise was to find out how to move the character by defining functions and using them in the update() method. 
in this case, the update() (c#) method is the draw() (p5js) function.

<iframe width="500" height="543" src="https://editor.p5js.org/hughfuchsen/full/mzBUeeYRP"></iframe>

```js
// declared variables
let xpos = 300;
let ypos = 300;
let moveSpeed = 5;

// create a canvas for the animation
function setup() {
  createCanvas(500, 500);
}

// the update() equivalent to c#
function draw() {
  // a pink background
  background("hotpink");

  // the fill() method draws the colour of the 
  // shape that will be moved
  fill("turquoise");
  // the ellipse() method draws the 
  // shape that will be moved. 
  // note the parametres of the 
  // x and y positions have been 
  // declared up top.
  ellipse(xpos, ypos, 75, 75);

  // these conditional methods update
  // the moving shape by incrementing 
  // +/- speed of movement per rate of frame
  if (movingRight) {
    xpos += moveSpeed;
  }
  if (movingLeft) {
    xpos -= moveSpeed;
  }
  if (movingUp) {
    ypos -= moveSpeed;
  }
  if (movingDown) {
    ypos += moveSpeed;
  }
}

// these functions containing conditional statements
// define which keys are to be pressed/released, 
// then a true or false boolean is
// assigned to the if() statements in draw()
function keyPressed() {
  if (key == "w" || keyCode == UP_ARROW) {
    movingUp = true;
  }
  if (key == "a" || keyCode == LEFT_ARROW) {
    movingLeft = true;
  }
  if (key == "s" || keyCode == DOWN_ARROW) {
    movingDown = true;
  }
  if (key == "d"|| keyCode == RIGHT_ARROW) {
    movingRight = true;
  }
}

function keyReleased() {
  if (key == "w" || keyCode == UP_ARROW) {
    movingUp = false;
  }
  if (key == "a" || keyCode == LEFT_ARROW) {
    movingLeft = false;
  }
  if (key == "s" || keyCode == DOWN_ARROW) {
    movingDown = false;
  }
  if (key == "d" || keyCode == RIGHT_ARROW) {
    movingRight = false;
  }
}
```


**a goal of mine is to be able to make my c# code more dry. here is my c# code for player movement at the moment**


```c#
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerMovement : MonoBehaviour
{
    public float speed;
    public Rigidbody2D myRigidbody;

    public string motionDirection = "normal";
    private Vector3 change;
    public Animator animator;

    // Start is called before the first frame update
    void Start()    
      {
        animator = GetComponent<Animator>();
        myRigidbody = GetComponent<Rigidbody2D>();
      }

    // Update is called once per frame
    void Update()
      {
        UpdateAnimationAndMove();
      }

    public void UpdateAnimationAndMove()
      {
        change = Vector3.zero;
        change.x = Input.GetAxisRaw("Horizontal");
        change.y = Input.GetAxisRaw("Vertical");
        if(change != Vector3.zero)
        {
          if(motionDirection == "normal") 
            {MoveCharacter();} 
          else if (motionDirection == "inclineLeftAway")
            {MoveCharacterVerticalInclineLeftAway();} 
          else if (motionDirection == "inclineRightAway") 
            {MoveCharacterVerticalInclineRightAway();}
          else if (motionDirection == "inclineLeftToward") 
            {MoveCharacterVerticalInclineLeftToward();}
          else if (motionDirection == "inclineRightToward") 
            {MoveCharacterVerticalInclineRightToward();}
          
          animator.SetFloat("moveX", change.x);
          animator.SetFloat("moveY", change.y);
          animator.SetBool("moving", true);
        }
        else
        {
          animator.SetBool("moving", false);
        }
      }

      public void UpdateAnimationAndMoveOnVerticalInclineLeft()
      {
        change = Vector3.zero;
        change.x = Input.GetAxisRaw("Horizontal");
        change.y = Input.GetAxisRaw("Vertical");
        if(change != Vector3.zero)
        {
          MoveCharacterVerticalInclineLeftAway
          ();
          animator.SetFloat("moveX", change.x);
          animator.SetFloat("moveY", change.y);
          animator.SetBool("moving", true);
        }
        else
        {
          animator.SetBool("moving", false);
        }
      }

      public void UpdateAnimationAndMoveOnVerticalInclineRight()
      {
        change = Vector3.zero;
        change.x = Input.GetAxisRaw("Horizontal");
        change.y = Input.GetAxisRaw("Vertical");
        if(change != Vector3.zero)
        {
          MoveCharacterVerticalInclineRightAway();
          animator.SetFloat("moveX", change.x);
          animator.SetFloat("moveY", change.y);
          animator.SetBool("moving", true);
        }
        else
        {
          animator.SetBool("moving", false);
        }
      }
    void MoveCharacterVerticalInclineLeftAway()
    {
      if (change == Vector3.right+Vector3.up)
      {
       change = new Vector3(1f,0.5f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.left+Vector3.up)
      {
       change = new Vector3(-0.8f,1f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.up)
      {
       change = new Vector3(-0.8f,1f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.right)
      {
       change = new Vector3(1f,0.5f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.right+Vector3.down)
      {
       change = new Vector3(0.8f,-1f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.left+Vector3.down)
      {
       change = new Vector3(-1f,-0.5f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.down)
      {
       change = new Vector3(0.8f,-1f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.left)
      {
       change = new Vector3(-1f,-0.5f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      else
      {
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
    }

        void MoveCharacterVerticalInclineRightAway()
   {
      if (change == Vector3.right+Vector3.up)
      {
       change = new Vector3(0.8f,1f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.left+Vector3.up)
      {
       change = new Vector3(-1f,0.5f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.up)
      {
       change = new Vector3(-0.8f,0.5f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.right)
      {
       change = new Vector3(0.8f,1f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.right+Vector3.down)
      {
       change = new Vector3(0.8f,-1f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.left+Vector3.down)
      {
       change = new Vector3(-0.8f,-1f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.down)
      {
       change = new Vector3(1f,-0.5f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.left)
      {
       change = new Vector3(-0.8f,-1,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      else
      {
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
    }
        void MoveCharacterVerticalInclineLeftToward()
   {
      if (change == Vector3.right+Vector3.up)
      {
       change = new Vector3(1f,-0.2f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.left+Vector3.up)
      {
       change = new Vector3(-1f,0.2f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.up)
      {
       change = new Vector3(-1f,0.2f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.right)
      {
       change = new Vector3(1f,-0.2f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.right+Vector3.down)
      {
       change = new Vector3(1f,-0.2f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.left+Vector3.down)
      {
       change = new Vector3(-1f,0.2f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.down)
      {
       change = new Vector3(1f,-0.2f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.left)
      {
       change = new Vector3(-1f,0.2f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      else
      {
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
    }

            void MoveCharacterVerticalInclineRightToward()
   {
      if (change == Vector3.right+Vector3.up)
      {
       change = new Vector3(1f,0.2f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.left+Vector3.up)
      {
       change = new Vector3(-1f,-0.2f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.up)
      {
       change = new Vector3(-1f,-0.2f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.right)
      {
       change = new Vector3(1f,0.2f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.right+Vector3.down)
      {
       change = new Vector3(1f,0.2f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.left+Vector3.down)
      {
       change = new Vector3(-1f,-0.2f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.down)
      {
       change = new Vector3(1f,0.2f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.left)
      {
       change = new Vector3(-1f,-0.2f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      else
      {
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
    }

        void MoveCharacter()
   {
      if (change == Vector3.right+Vector3.up)
      {
       change = new Vector3(1f,0.5f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.left+Vector3.up)
      {
       change = new Vector3(-1f,0.5f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.up)
      {
       change = new Vector3(-1f,0.5f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.right)
      {
       change = new Vector3(1f,0.5f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.right+Vector3.down)
      {
       change = new Vector3(1f,-0.5f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.left+Vector3.down)
      {
       change = new Vector3(-1f,-0.5f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.down)
      {
       change = new Vector3(1f,-0.5f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      if (change == Vector3.left)
      {
       change = new Vector3(-1f,-0.5f,0f);
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
      else
      {
       myRigidbody.MovePosition(transform.position + change * speed * Time.deltaTime);
      }
    }
 

}

```


--- 
</font>










