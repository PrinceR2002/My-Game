// In order to develop an understanding of javascript as I have no prior experience, I followed a tutorial by Ihabexe in order to create the fundamentals of the game. It was very helpful to understand how many aspects of javascript work together.

// Video Tutorial that helped with the moving objects
// https://youtu.be/ub8BDrHPEiM

// Background image from google

// By Ulysses Leon and Shawn Hudman
  var temp = false;
  // for scene manager
  function jumpGame() {

  var isDead = false;
  var scoreStatic = false;
  var bgMoveRate = 3;
  var origScore = 0;
  var playerScore = 0;
  
  const gravity = 9.81;
  const ground = 20;
  const jHeight = 9.0;
  
  const width = 800;
  const height = 600
  

  // used constructor method from video -- did not understand constructors before
  class Ball {
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.vely = 0;
    }

    draw() {
      fill("red");
      // circle used for collisions
      circle(this.x, this.y, this.size);
      // red ball image
      redball.resize(97, 97);
      image(redball, this.x - 42, this.y - 44);
    }

    //used from tutorial
    update() {
      this.y += this.vely;

      // lerp finds number between two numbers
      this.vely = lerp(this.vely, gravity, 0.05);
      
      this.y = Math.max(this.size / 2, Math.min(this.y, height - ground - this.size / 2));
    }

    // function runs when space is pressed
    ballJump() {
      this.vely = -jHeight;

      // jump sound
      jumpSnd.play();
    }

    // checks position of ball and checks collision with rectangles
    // followed loop structure from tutorial
    checkDeath(obstacles) {
      for (var rectangle of obstacles.obstacles_list) {
        if (this.x + this.size / 2 > rectangle.x && rectangle.height && this.x - this.size / 2 < rectangle.x + obstacles.width) {
          if (this.y - this.size / 2 <= rectangle.height || this.y + this.size / 2 >= rectangle.height + obstacles.gap) {
            // used for score screen
            playerScore = origScore;
            isDead = true;
          }
        }
        if (this.x - this.size / 2 > rectangle.x + obstacles.width && rectangle.scored == false) {
          origScore += 1;
          playerScore = origScore;
          rectangle.scored = true;
        }
      }
    }
  }

  // used to create random heights of obstacles
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  class Obstacles {
    // used constructor method from tutorial
    constructor(width, frequency, gap) {
      this.width = width;
      this.frequency = frequency;
      this.gap = gap;

      this.obstacles_list = [
        { x: 500, height: getRndInteger(this.gap, height - ground - this.gap), scored: false },
        { x: 500 + this.width + this.frequency, height: getRndInteger(this.gap, height - ground - this.gap), scored: false }
      ];
    }

    // creates levels for increasing difficulty
    update() {
      for (var rectangle of this.obstacles_list) {
        rectangle.x -= bgMoveRate;
        if (origScore > 4 && isDead == false) {
          bgMoveRate = 6;
        }
        if (origScore > 9 && isDead == false) {
          bgMoveRate = 9;
        }
        if (origScore > 14 && isDead == false) {
          bgMoveRate = 12;
        }
        if (origScore > 19 && isDead == false) {
          bgMoveRate = 15;
        }
        if (rectangle.x + this.width <= 0) {
          rectangle.x = width;
          rectangle.height = getRndInteger(this.gap, height - ground - this.gap - this.gap);
          rectangle.scored = false;
        }
      }
    }

    newObstacle() {
      fill("gray");
      for (var rectangle of this.obstacles_list) {
        rect(rectangle.x, 0, this.width, rectangle.height);
        rect(rectangle.x, height - ground, this.width, -height + rectangle.height + ground + this.gap);
      }
    }

  }

  var ball = new Ball(width / 3, height / 2, 30);
  var obstacles = new Obstacles(60, 150, 130);

  // main draw function
  this.draw = function() {
    background(jumpBack);
    fill("#7cfc00");
    rect(0, height - ground, width, height);

    ball.draw();
    ball.update();
    ball.checkDeath(obstacles);

    obstacles.update();
    obstacles.newObstacle();

    fill(255);
    textSize(60);
    textAlign(CENTER);
    text(origScore, width / 2, 200);
    // bgMoveRate += 0.01;
    if (isDead == true) {
      scoreStatic = true;

      clear();
      background(jumpBack);
      bgMoveRate = 0;

      fill('black');
      textSize(70);
      text('You Lost...', width / 2, height / 3);
      textSize(20);
      textFont(thisfont);
      text("Press Anywhere to go to main menu!\nEvery 5 Points is a new difficulty level!\n\nYour score was: " + origScore, width / 2, height - height / 5);
      this.mouseClicked = function() {
        if (dist(mouseX, mouseY, 130, 150) < 600) {
          clear();
          isDead = false;
          location.reload();
          // this.sceneManager.showScene(jumpMenu);
          
        }
      }
    }
  }

  // space pressed
  this.keyPressed = function() {
    if (keyCode == 32) {
      ball.ballJump();

    }
  }

  // mouse clicked
  this.mouseClicked = function() {
    ball.ballJump();
  }


}
