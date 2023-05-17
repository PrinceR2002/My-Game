function pongMenu() {
 

  let bounce;
  let count = 0;
  
  
  this.enter = function(){
    colorMode(RGB, 255);
      
  }
  
  this.draw = function(){
    background(pongBackground);
    textFont(ka1);
    cursor(ARROW);
    
    
    //Bounce effect
    count++;
    bounce = map(sin(radians(count) * 2), -1, 1, -2, 5);
    
    fill("black");
    textSize(60);
    text("Welcome to \n pong!", width / 2, height / 2.5 + bounce);

    //subtitle(Press);
    textSize(20);
    text("Press", width / 2.65, height / 1.19);

    //subtitle(space);
    fill(220, 250, map(sin(radians(count)), -1, 1, 150, 255));
    text("space", width / 2, height / 1.2 + bounce);

    //subtitle(to play);
    fill("black");
    text("to play!", width / 1.57, height / 1.19);

//_________________________________________
    
    //Home button (Top-Left)
    homeButton.resize(40,40);
    image(homeButton, 30, 30);
     
//_________________________________________
   
    //hovering over home button
    distance(50, 50);
  if (d < 20) {
    push(); 
    textFont(font);
    
    textSize(30);
    text("Go to main menu",width/4.6,height/10)
    homeHover.resize(40,40);
    image(homeHover, 30, 30);
    cursor(HAND);
    pop();
  }
    
  //_________________________________________
    
    //Help button (Top-Right)
     helpButton.resize(45,45);
    image(helpButton,730, 30);
  //_________________________________________
    
    //hovering over help button (Top-right)
    
    distance(750,50);
  if (d < 25) {
    push();
    textFont(font);

    textSize(30);
    text("How to play",width/1.23,height/10)
    helpHover.resize(45,45);
    image(helpHover, 730, 30);
    cursor(HAND);
    pop();
  }
    
  //_________________________________________
  }
  /*
  this.mouseClicked = function() {
  if(dist(mouseX, mouseY,730, 30) < 20){
    this.sceneManager.showScene(home);
  }
  };
  */
  this.mouseClicked = function() {
  if(dist(mouseX, mouseY, 50,50) < 20){
    this.sceneManager.showScene(home);
  }
  if(dist(mouseX, mouseY, 750,50) < 25){
    this.sceneManager.showScene(pongHelp);
  }
  };
  
  this.keyPressed = function() {
    if (keyCode == 32) {
    this.sceneManager.showScene(pongGame);
    }
  };
  
  function distance(X, Y) { //originX, originY
  d = Math.sqrt(((X - mouseX) * (X - mouseX) + (Y - mouseY) * (Y - mouseY)));
  return d;
}
  
}