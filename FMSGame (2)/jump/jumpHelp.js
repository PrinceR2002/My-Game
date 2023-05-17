function jumpHelp(){
  
  let bounce;
  let count = 0;
  
  this.enter = function(){
colorMode(HSB, 360, 100, 100, 100);
      
  }
  
  this.draw = function(){
    background(jumpBackground);
    //Bounce effect
  count++;
  bounce = map(sin(radians(count) * 2), -1, 1, -2, 5);
    
//____________________________________________

    cursor(ARROW);
    textFont(ka1);
    linearGradient(
    width/2-200, height/2-200,
    width/2+200, height/2+200, 
    color(10, 100, 100, 100), 
    color(50, 100, 100, 100)
  );
   
    //fill('#8C00EB');
    rect(75, 75, 650, 450, 50);
    //shadow();
    
    
    push();
     fill('black')
    textSize(50);
    textFont(font);
    text('How to play',width/2, 150);
    textSize(23);
    text('Use the space bar to jump and\navoid hitting the green pipes,\nthe game gets harder as \ntime passes!', width/1.49, 210);
    pop();
    
 //_________________________________________
    
    //Home button (Top-Right)
     homeButton.resize(40,40);
    image(homeButton,730, 25);
  //_________________________________________
    
    //hovering over home button (Top-right)
    distance(750,50);
  if (d < 25) {
    textFont(font);
    textSize(30);
    fill('black');
    text("Go to main menu",width/1.28,height/10);
    homeHover.resize(40,40);
    image(homeHover, 730, 25);
    cursor(HAND);
  }
//_________________________________________
    
    //Home button (Top-Left)
    backButton.resize(40,40);
    image(backButton, 30, 30);
     
//_________________________________________
    
    //hovering over home button
    distance(50, 50);
  if (d < 20) {
    textFont(font);
    textSize(30);
    fill('black');
    text("Go back",width/6.5,height/10)
    backHover.resize(40,40);
    image(backHover, 30, 30);
    cursor(HAND);
  }
  
//_________________________________________  
    push()
    shadow()
    start.resize(200,200)
    image(start, 310, 360);

    jumpHelpScene.resize(225,225);
    image(jumpHelpScene, 125, 170);
    
    birdHelp.resize(250,250);
    image(birdHelp, 125, 160 + bounce);

    spaceBar.resize(100,100);
    image(spaceBar, 490, 300+bounce);
    pop();

//_________________________________________
    
    distance(410, 455);
  if (d < 70) {
    startHover.resize(200,200)
    image(startHover, 310, 360);
    cursor(HAND); 
  }
    
  }
  
  
  
  this.mouseClicked = function() {
  if(dist(mouseX, mouseY, 50,50) < 20){
    this.sceneManager.showScene(jumpMenu);
  }
  if(dist(mouseX, mouseY, 410, 455) < 70){
    this.sceneManager.showScene(jumpGame);
  }
  if(dist(mouseX, mouseY, 750,50) < 25){
    this.sceneManager.showScene(home);
  }
  }
  
  function distance(X, Y) { //originX, originY
  d = Math.sqrt(((X - mouseX) * (X - mouseX) + (Y - mouseY) * (Y - mouseY)));
  return d;
}

function shadow(){
  drawingContext.shadowOffsetX = 14;
  drawingContext.shadowOffsetY = 14;
  drawingContext.shadowBlur = 14;
  drawingContext.shadowColor = color(230, 30, 18, 100);
}
  
function linearGradient(sX, sY, eX, eY, colorS, colorE){
  let gradient = drawingContext.createLinearGradient(
    sX, sY, eX, eY
  );
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);
  drawingContext.fillStyle = gradient;
}


}