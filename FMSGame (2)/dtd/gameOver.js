//Author Ali Kefel
function gameOver() {

  clear();
  push();

  this.setup = function() {
    createCanvas(900, 600);
    screenMode = 10;
    circles = [];
    hit = 0;

  }

  this.draw = function() {

    imageMode(CORNERS);
    background(color(255, 114, 118));
    //image(defeatjpg,0,0);
    //textFont(waghu);
    textFont(segmentFont);
    textSize(60);
    textStyle(BOLD);
    textAlign(CENTER);
    fill("white");
    text("Defeat\nTry Again", 450, 100);
    text("[0]==> Menu \n[1]==> Level 1 \n[2]==> Level 2 \n[3]==> Level 3 ", 450, 300);

    if (screenMode == 0) {
      this.sceneManager.showScene(dtdmenu);
      console.log("Show Scene menu");
    }
    if (screenMode == 1) {
      resetVariables();
      dropfall();
      this.sceneManager.showScene(level_1);
      console.log("Show Scene level_1");
    }
    if (screenMode == 2) {
      resetVariables2();
      dropfall2();
     this.sceneManager.showScene(level_2);
      console.log("Show Scene level_2");
    }
    if (screenMode == 3) {
      resetVariables3();
      dropfall3();
      this.sceneManager.showScene(level_3);
      console.log("Show Scene level_3");
    }
  }

  this.keyPressed = function() {
    if (key == "0") { 
      screenMode = 0;
    }
    if (key == "1") { 
      screenMode = 1;
    }
    if (key == "2") {
      screenMode = 2;
    }
    if (key == "3") {
      screenMode = 3;
    }
  }
  pop();
}