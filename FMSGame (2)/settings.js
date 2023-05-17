function settings(){
  let d;
  
  this.enter=function(){
    colorMode(HSB, 360, 100, 100, 100);
  }
  
  this.draw=function(){
    background(homeImage);
    cursor(ARROW);

    linearGradient(
    width/2-200, height/2-200,
    width/2+200, height/2+200, 
    color(10, 100, 100, 100), 
    color(50, 100, 100, 100)
  );
   
    //fill('#8C00EB');
    rect(75, 75, 650, 450, 50);
    //shadow();
    
    fill('black')
    textSize(50);
    text('Settings',width/2, 150);

  //Home button (Top-Right)
     homeButton.resize(40,40);
    image(homeButton,730, 25);
  //_________________________________________
    
    //hovering over home button (Top-right)
    distance(750,50);
  if (d < 25) {
    textFont(font);
    textSize(30);
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
    text("Go back",width/6.5,height/10)
    backHover.resize(40,40);
    image(backHover, 30, 30);
    cursor(HAND);
  }
  
//_________________________________________      
  /* 
  push();
  textFont(font);
  shadow();
  
  pop();
  */
//_________________________________________
    
  }

  this.mouseClicked = function() {
  if(dist(mouseX, mouseY, 50,50) < 20){
    this.sceneManager.showScene(home);
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
