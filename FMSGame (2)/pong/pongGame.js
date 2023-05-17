function pongGame(){
//Level Variable Arrays 
  //(PlayerPaddlelength, OpponantPaddleLength, opponentSpeed, WinPoints, BallXSpeed, BallYSpeed) 
let level1Vars = [  120,   80,   0.8,   3,    1,   1];
let level2Vars = [  100,   85,   0.9,   5,    1,   1];
let level3Vars = [  80,    90,   1,     7,    1,   1];

//Screen Size
var screenLength = 800;
var screenHeight = 600;

var gameState = 0; //moves between menu and game

var level1Button, level2Button, level3Button, exitButton, quitButton

//Vars for scorekeeping and win condition
var playerScore = 0;
var opponentScore = 0;
var winPoints = 3;

//Vars for game speed, set by dificulty
var ballStartingXSpeed = -3;
var ballStartingYSpeed = -1;
var opponentSpeed = 0.8;  //Speed at which opponent's paddle moves

//Ball position and movement
var ballSize = 20;
var ballX = 0;
var ballY = 0;
var ballVelocityX = 0;
var ballVelocityY = 0;
//var ballTrueVelocity = 0;
var ballXVMax = 5;
var ballYVMax = 5;
  

//Player Paddle Settings
var playerPaddlePossition = 0;
var playerPaddleLength = 120;

//Oponnent Paddle Settings
var opponentPaddlePossition = 0;
var opponentPaddleLength = 80;

//Paddle Shared Vars
var paddleWidth = 25;
var paddleWallDistance = 15;

//X positions where bounce with paddle is checked
var paddleHitbox = paddleWidth + paddleWallDistance + (ballSize / 2);

var opponentHitbox = screenLength - (paddleWidth + paddleWallDistance + (ballSize / 2));

var paddleSegmentLength = playerPaddleLength/5;


  

//-----------------------------------------------------

//Main Code - All Functions 
  /*
function preload(){

}*/
//Setup, Called at start
this.setup = function() {
  createCanvas(screenLength, screenHeight);
  //fill('#ffffff');
  colorMode(RGB, 255);
  ballX = screenLength / 2;
  ballY = screenHeight / 2;

  ballVelocityX = ballStartingXSpeed;
  ballVelocityY = ballStartingYSpeed;

  circle(ballX, ballY, ballSize);

  //print('Ply hit:' + paddleHitbox);
  //print('Opp hit:' + opponentHitbox);
  thisfont=loadFont('ka1.ttf');
  court = loadImage('PongBackground.png');
  image(court, 0, 0, screenLength, screenHeight);
  
  //bounceSnd = loadSound('Bounce.WAV');
  //gameMusic = loadSound('GameMusic.mp3');
  //menuMusic = loadSound('TitleMenu.mp3');
  //winJingle = loadSound('Win.mp3');
  //loseJingle = loadSound('Lose.mp3');
  
  
  //print("Player Score: " + playerScore);
  //menuMusic.loop();
}

//function preload(){
//  bounceSnd = loadSound('Bounce.WAV');
//  gameMusic = loadSound('GameMusic.mp3');
//  menuMusic = loadSound('TitleMenu.mp3');
//  winJingle = loadSound('Win.mp3');
//  loseJingle = loadSound('Lose.mp3');
//}
  

//Draw, Called every frame
this.draw = function() {
//textFont(font);
  if (gameState == 0) {
    textFont(font);
    background("grey");

    image(pongMenuBackround, 0, 0, screenLength, screenHeight);

    level1Button = createButton("Level 1 - " + level1Vars[3] + " Points");
    level1Button.position(350, 200);
    level1Button.mousePressed(level1);

    level2Button = createButton("Level 2 - " + level2Vars[3] + " Points");
    level2Button.position(350, 300);
    level2Button.mousePressed(level2);

    level3Button = createButton("Level 3 - " + level3Vars[3] + " Points");
    level3Button.position(350, 400);
    level3Button.mousePressed(level3);

    quitButton = createButton("Quit Game");
    quitButton.position(10, 10);
    //this.mouseClicked(quitGame);
    //quitButton.mousePressed(quitGame);
   this.mouseClicked = function(){
     if (gameState == 0){
       textFont(font);
       if (dist(mouseX, mouseY, 30,10) < 50){
          removeElements();
          menuMusic.stop();
          if(quitButton){
          this.sceneManager.showScene(pongMenu);
        }
      }
     }
   }
  if (menuMusic.isPlaying()){}
    else {menuMusic.loop()}
  
  }

  if (gameState == 1) {
    removeElements();
    textFont(font);
    image(court, 0, 0, screenLength, screenHeight);

    //Movement of player
    playerMovement();

    //Set new Ball Possition
    ballMovement();

    //Set opponantPosition
    opponentMovement();

    textSize(50);
    textAlign(CENTER);
    push();
    textFont(thisfont);
    text(playerScore + '-' + opponentScore, 400, 40);
    pop();

    exitButton = createButton("Exit");
    exitButton.position(10, 10);
    exitButton.mousePressed(exitGame);

    
    
  }

  //Win Screen
  if (gameState == 3) {
    removeElements();
    textFont(font);
    text('Winner!', 400, 300);

    exitButton = createButton("Exit");
    exitButton.position(10, 10);
    exitButton.mousePressed(exitGame);
  }

  //Loose Screen
  if (gameState == 4) {
    removeElements();
    textFont(font);
    text('Loss...', 400, 300);

    exitButton = createButton("Exit");
    exitButton.position(10, 10);
    exitButton.mousePressed(exitGame);
  }
}

//Player movement
function playerMovement() {

  //Math for Player paddle positioning
  if (mouseY > screenHeight - (playerPaddleLength / 2)) {
    //Keep paddle at bottom
    playerPaddlePossition = screenHeight - (playerPaddleLength);

  } else if (mouseY < (playerPaddleLength / 2)) {
    //keep Paddle at top
    playerPaddlePossition = 0

  } else {
    //Keep Middle of paddle at mouse
    playerPaddlePossition = mouseY - (playerPaddleLength / 2);
  }

  //Set player paddle position
  push();
  fill('white');
  rect(paddleWallDistance, playerPaddlePossition, paddleWidth, playerPaddleLength);
  pop();
}

//Adjust ball location based on current speed, and check for bounce or score
function ballMovement() {
  //print('Ball Moving');

  //Wall Bounce Check
  if (ballY == (ballSize / 2) || ballY == screenHeight - (ballSize / 2)) {
    ballWallBounce();
    print('bounce');
  }

  if (abs(ballY -(ballSize/2)) <= 1 || screenHeight - abs(ballY + (ballSize/2)) <= 1){
    ballWallBounce();
    print('bounce');
  }

  

  //Player Paddle Check
  if (abs(ballX - paddleHitbox) <= 2) {
    //print('Player bounce check');
    if (ballY >= playerPaddlePossition &&
      ballY <= playerPaddlePossition + playerPaddleLength) {
      //print('Player Bounce confirmed');
      ballPaddleBounce();
    }
  }

  //Opponent Paddle Check
  else if (abs(opponentHitbox - ballX) <= 2) {
    //print('Opponent bounce check');
    if (ballY >= opponentPaddlePossition &&
      ballY <= opponentPaddlePossition + opponentPaddleLength) {
      //print('Opponent Bounce confirmed');
      ballPaddleBounce();
    } else {
      //print('Opponent miss');
    }
  }

  //Goal Wall Check
  //Opponant Score
  else if (ballX <= 0) {
    pointOpponent();
  }

  //Player Score
  else if (ballX >= screenLength) {
    pointPlayer();
  }


  //Set new position
  ballX = ballX + ballVelocityX;
  ballY = ballY + ballVelocityY;
  push();
  fill('yellow');
  

  circle(ballX, ballY, ballSize);
pop();
}

//Invert Vertical movement when the ball hits the sides
function ballWallBounce() {
  ballVelocityY = ballVelocityY * -1;
  bounceSnd.play();
  removeElements();
  
    print('Wall bounce at ' + ballX + ',' + ballY);
}

//Invert horizontal movement when the ball hits a paddle
//Note* Redo to add angle variance based on where the ball hits the paddle
// Add Sound Effect
function ballPaddleBounce() {
  ballVelocityX = ballVelocityX * -1;
  bounceSnd.play();
  removeElements();
  //print('Paddle Bounce');
}

function playerBounceAngle() {
  
}


//Adjust opponent paddle possition based on the curent ball location. 
function opponentMovement() {

  if (ballY <= (opponentPaddlePossition + (opponentPaddleLength / 2))) {
    opponentPaddlePossition = opponentPaddlePossition - opponentSpeed;
    if (opponentPaddlePossition < 0) { opponentPaddlePossition = 0 }

  } else if (ballY >= (opponentPaddlePossition + (opponentPaddleLength / 2))) {

    opponentPaddlePossition = opponentPaddlePossition + opponentSpeed;
    if ((opponentPaddlePossition + opponentPaddleLength) > screenHeight) {
      opponentPaddlePossition = (screenHeight - opponentPaddleLength)
    }
  }
  push();
  fill('black');
  stroke('white');
  rect(screenLength - (paddleWallDistance + paddleWidth), opponentPaddlePossition, paddleWidth, opponentPaddleLength);
  stroke('black');
  pop();
}

//Give point to Player, then call opponent point and reset ball location.
function pointPlayer() {
  playerScore++;
  print("Player Score: " + playerScore);
  scorePause();
  if (playerScore == winPoints) {
    endGame();
  } else {
    resetBall();
    ballVelocityX = - ballVelocityX;

  }
}

//Give point to opponent, then call opponent point and reset ball location.
function pointOpponent() {
  opponentScore++;
  print("Opponent Score: " + opponentScore);
  scorePause();
  if (opponentScore == winPoints) {
    endGame();
  } else {
    resetBall();
  }
}

function resetBall() {
  ballX = screenLength / 2;
  ballY = screenHeight / 2;

  ballVelocityX = random(ballStartingXSpeed - 1, ballStartingXSpeed + 1);
  ballVelocityY = random(ballStartingYSpeed - 1, ballStartingYSpeed + 1);
}

//Pauses for a moment after a point is scored
function scorePause() {
  //WAIT sleep (2000);
} 

function startGame() {
  
  gameState = 1;
  resetBall();
  zeroPoints();
  menuMusic.stop();
  gameMusic.loop();
  removeElements();
}

function level1(){
  playerPaddleLength = level1Vars[0];
  opponentPaddleLength = level1Vars[1];
  opponentSpeed = level1Vars[2];
  winPoints = level1Vars[3];

  paddleSegmentLength = playerPaddleLength/5;
  
  startGame();
}

function level2(){
  playerPaddleLength = level2Vars[0];
  opponentPaddleLength = level2Vars[1];
  opponentSpeed = level2Vars[2];
  winPoints = level2Vars[3];

  paddleSegmentLength = playerPaddleLength/5;
  
  startGame();
}

function level3(){
  playerPaddleLength = level3Vars[0];
  opponentPaddleLength = level3Vars[1];
  opponentSpeed = level3Vars[2];
  winPoints = level3Vars[3];

  paddleSegmentLength = playerPaddleLength/5;
  
  startGame();
}

function endGame() {
  gameMusic.stop();
  if (playerScore > opponentScore) {
    winJingle.play();
    gameState = 3;
  } else {
    loseJingle.play();
    gameState = 4;
  }

  removeElements();
  zeroPoints();
}

function zeroPoints() {
  playerScore = 0;
  opponentScore = 0;
  //print("Score Reset");
}

function exitGame() {
  zeroPoints();
  gameState = 0;
  gameMusic.stop();
  menuMusic.loop();
  removeElements();
}

  
function quitGame(){

  print("Exit Game");
    gameMusic.stop();
    menuMusic.loop();
    removeElements();
    this.sceneManager.showScene(pongMenu);
  }
  
}