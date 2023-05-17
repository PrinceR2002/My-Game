//Author Ali Kefel
let circles = [];
let hit = 0;
let runtime;

let heartARR = [4];
let remainingHearts = 4;

function level_1() {
  //screenMode = 1;
  characterRadius = 20;
//__________________________________________________
  this.setup = function() {
    createCanvas(900, 600);
    screenMode = 1;
    dropfall();
    while (screenMode == 2 || screenMode == 3) {
      circle = []
      hit = 0
    }
    
    for(i = 0 ; i < 4 ; i++){
      heartARR.push(heartPNG);
    }
    
  }
//__________________________________________________
  this.draw = function() {
      console.log("level 1 runtime: " + startTimer());
    
    imageMode(CORNERS);
    image(BGlevel1, 0, 0, 900, 600);
    image(cloud2, 0, 120, 900, 600)
    
    textFont(mullers);
    textSize(60);
    textStyle(BOLD);
    textAlign(CENTER);
    
    imageMode(CENTER)
    image(umbrella, mouseX, mouseY, 200, 200);
    
    noStroke();
    fill("white")
    text("Level 1!", 450, 100);
    text(hit, 200, 200);
    
    textSize(30);
    textFont(segmentFont);
    text("Timer: " + timer, 200, 300)
    
    //text(screenMode, 50, 50);
    
    //game.draw();
    for (let i = 0; i < circles.length; i++) {
      let circle = circles[i];
      circle.fall();
      
      if (circle.y > height) {
        circle.y = random(-height, 0);
      }
      //Collision detection
      let distance = dist(circle.x, circle.y, mouseX, mouseY);
      
      if (distance < 25) {
        //console.log(hit);
        hit++;
        remainingHearts --;
        heartARR.splice(i, 1);
        circles.splice(i, 1);
      }
      
      if (hit >= 4 ) {
        //scenemanager.showScene(gameOver)
        screenMode = 10;
      }
        
      if ( timer <= 0) {
        screenMode = 15
        this.sceneManager.showScene(victoryScreen);
        console.log('Show Scene victoryScreen');
  
      }
        
      if (screenMode == 10) {
        this.sceneManager.showScene(gameOver);
        console.log('Show Scene gameOver');
      }
      
      circle.display();
    }
    
    if(hit<=4){
      for(i = 0 ; i < remainingHearts; i++){
        imageMode(CENTER);
        image(heartPNG, 75 + i * 75, 75, 50, 50);
      }    
    }
  }

    
}  //End of Level_1 Function.

function resetVariables() {
  remainingHearts = 4;
  timer = 20;
  hit = 0;
  circles = [];
  let i = 0;
  while (circles.length > 0) {
    console.log("Level 1 real runtime:" + startTimer());
  }


}

function dropfall() {
  for (let i = 0; i < 30; i++) {
    let x = random(width);
    let y = random(-height, 0);
    let speed = random(5, 7);
    let sizex = random(80, 90);
    let sizey = random(80, 90);
    let circle = new Circle(x, y, speed, sizex, sizey);
    circles.push(circle);
  }
}

