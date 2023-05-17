//Author Ali Kefel
// Contains menu function and gameover function.

let rain = [];


function dtdmenu() {

  this.setup = function() {
    circles = [];
    hit = 0;

    screenMode = 0;
    createCanvas(800, 600);
    count++;
    bounce = map(sin(radians(count) * 5), -1, 1, -2, 5);

    for (let i = 0; i < 200; i++) {
      rain[i] = new Raindrop();
    }
    rain = new Raindrop(0, 0, width, height / 2, 40);
  }

  this.draw = function() {
    drawMenu();
  }

  this.keyPressed = function() {
    if (key == "1") {
      resetVariables();
      dropfall();
      this.sceneManager.showScene(level_1);
      console.log("Show Scene level_1");

    }
    if (key == "2") {
      resetVariables();
      dropfall();
      this.sceneManager.showScene(level_2);
      console.log("Show Scene level_2");

    }
    if (key == "3") {
      resetVariables3();
      dropfall3();
      this.sceneManager.showScene(level_3);
      console.log("Show Scene level_3");
    }
  }

  function drawMenu() {
    clear();
    cursor(ARROW);
    background("lightblue");
    
    image(bgmenu, 0, 0, 900, 600);
    image(cloud2, 0, 120, 900, 600)
    textSize(40);
    textStyle(BOLD);
    textAlign(CENTER);


    //textFont(waghu);
    textFont(yahoo);
    fill("black")
    text("Dodge The Drops !", 410, 120);
    textSize(30);
    noStroke();
    textFont(segmentFont);
    fill('black');
    text("Click the number \" 1 \" key to start the game", 410, 220 + bounce);

    //text(screenMode, 50, 50);

    rain.setColor("darkblue");
    rain.update();
    rain.display();

    //_________________________________________
    
    //Home button (Top-Left)
    homeButton.resize(40,40);
    image(homeButton, 30, 30);
     
//_________________________________________
    
    //hovering over home button'
    push();
    noStroke();
    distance(50, 50);
  if (d < 20) {
    textFont(font);
    textSize(30);
    text("Go to main menu",width/4.6,height/10)
    homeHover.resize(40,40);
    image(homeHover, 30, 30);
    cursor(HAND);
  }    
//_________________________________________
    
    //Help button (Top-Right)
     helpButton.resize(45,45);
    image(helpButton,730, 25);
//_________________________________________
    
    //hovering over help button (Top-right)
    distance(750,50);
  if (d < 25) {
    textFont(font);
    textSize(30);
    text("How to play",width/1.23,height/10)
    helpHover.resize(45,45);
    image(helpHover, 730, 25);
    cursor(HAND)
    pop();
  }
//____________________________


  }
  this.mouseClicked = function() {
  if(dist(mouseX, mouseY, 50,50) < 20){
    this.sceneManager.showScene(home);
  }
  if(dist(mouseX, mouseY, 750,50) < 25){
    this.sceneManager.showScene(dtdHelp);
  }
  };

  function distance(X, Y) { //originX, originY
  d = Math.sqrt(((X - mouseX) * (X - mouseX) + (Y - mouseY) * (Y - mouseY)));
  return d;
}


}

function victoryScreen() {
  clear();
  this.setup = function() {
    createCanvas(900, 600);
    screenMode = 15;
    circles = [];
    hit = 0;
  }

  this.draw = function() {
    imageMode(CORNERS);
    background(color(152, 251, 152));

    //textFont(waghu);
    textFont(segmentFont);
    textSize(60);
    textStyle(BOLD);
    textAlign(CENTER);
    fill("white");
    text("Victory\nTry Again ? ", 450, 100);
    text("[0]==> Menu \n[1]==> Level 1 \n[2]==> Level 2 \n[3]==> Level 3 ", 450, 300);

    if (screenMode == 0) {
      resetVariables();
      this.sceneManager.showScene(dtdmenu);
      console.log("Show Scene menu");
    }
    if (screenMode == 1) {
      resetVariables();
      timer = 10
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
      console.log("Show Scene level_31");
    }
  }

  this.keyPressed = function() {
    if (key == "0") {
      //this.sceneManager.showScene(menu); 
      screenMode = 0;
    }
    if (key == "1") {
      //this.sceneManager.showScene(level_2); 
      screenMode = 1;
    }
    if (key == "2") {
      //this.sceneManager.showScene(level_2); 
      screenMode = 2;
    }
    if (key == "3") {
      //this.sceneManager.showScene(level_2); 
      screenMode = 3;
    }
  }


}

//image(BGlevel3, 0, 0, 900, 600);
