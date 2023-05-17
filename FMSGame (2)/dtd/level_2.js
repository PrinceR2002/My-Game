//Author Ali Kefel
let circles2 = [];
let hit2 = 0;
let runtime2;



function level_2() {
   //screenMode = 3;
  characterRadius = 25;
  this.setup = function() {
    createCanvas(900, 600);
    screenMode = 2;

    dropfall2();

    //game = new CircleDrop();
    //game.enter();
    for(i = 0 ; i < 4 ; i++){
      heartARR.push(heartPNG);
    }
  }

  this.draw = function() {
    
    console.log("level 2 runtime: " + startTimer());
    
    imageMode(CORNERS);
    image(BGlevel2, 0, 0, 900, 600);
    image(cloud2, 0, 120, 900, 600)

    textFont(mullers);
    textSize(60);
    textStyle(BOLD);
    textAlign(CENTER);

    imageMode(CENTER)
    image(umbrella, mouseX, mouseY, 200, 200);    
    
    noStroke();
    fill("white")
    text("Level 2!", 450, 100);
    text(hit2, 200, 200);

    textSize(30);
    textFont(segmentFont);
    text("Timer: " + timer, 200, 300)
  
    //game.draw();
    for (let i = 0; i < circles2.length; i++) {
      let circle = circles2[i];
      circle.fall();

      if (circle.y > height){
        circle.y = random(-height, 0);       
      }
      //Collision detection
      let distance = dist(circle.x, circle.y, mouseX, mouseY);

      if (distance < 25) {        
        //console.log(hit);
        hit2++;
        remainingHearts --;
        heartARR.splice(i, 1);
        circles2.splice(i,1);
      }
      
      if (hit2 >= 4){
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




}


function resetVariables2(){
  remainingHearts = 4;
  timer = 40;
  hit2 = 0;
  circles2 = [];
  let i = 0;
}

function dropfall2(){
  
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(-height, 0);
    let speed = random(7, 9);
    let sizex = random(50, 60);
    let sizey = random(50, 60);
    let circle = new Circle(x, y, speed, sizex, sizey);
    circles2.push(circle);
  }
}