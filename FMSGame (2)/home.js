function home(){
  let count = 0;
  let bounce;
  let d;
  
  //Fyling bird
  let posX = 0
  let posY = 0
  let size1=100
  let size2=200
  //Floating texts
  let message = 'Select a Game to play!';
let messageX;
const xSpeed = 1;
const ySpeed = 0.03;
const amplitude = 10;
const verticalLetterSpacing = 10;
  
  
  this.setup = function(){
    messageX = width;
    //colorMode(RGB, 255);
  
  }
  

  this.draw = function(){
    background(homeImage);
    cursor(ARROW);
    
    ///*
    //redBird flying
    //redBird.resize(59,59);
    image(redBird, 800-posX, 14, 120, 80)
    image(blueBird, posX-100, 0, 120, 120)
      if (posX > width+400 || posY > height) {
    posX = 0
    posY = 0
    size1 = 100
    size2 = 200

  } else {
    posX += 1.5
    posY += 0.9
    size1 += 0.2
    size2 -=0.25
  }
    //*/
    //--------Bounce effect---------
    count++; 
    bounce = map(sin(radians(count)*2),-1,1,-2,5);
  //--------------------------------  
    //witch Outline
    redball.resize(350,350);
    image(redball, 550, 1+bounce);
    
    //rocket
    rocket.resize(200,200);
    image(rocket, 34, 55+bounce);
    
    //Pong
    pong.resize(150,150)
    image(pong, width/2.5, height/1.6+bounce);

    //Settings
    settings.resize(125,125)
    image(settings, 30,height/1.35);
  
    //--------------------------------  
    //Menu texts
    textFont(font);
    fill('black');
    textSize(50);
    text('Jump', 700, 150);
    text("Pong", width/2.1,height/1.2);
    
    textSize(35)
    text("Dodge the\ndrops", 130, 155);
    
   //--------------------------------   
  //Welcome Text
  fill('black')
  textAlign(CENTER);
  textFont(ka1);
  textSize(70);
  text("Welcome!", width/2, height/2+bounce);
    
  //--------------------------------  
    
  //rocket outline text
  distance(130, 150);
  if (d < 55) {
    
    fill('purple');
    textFont(font);
    textSize(35);
    text("Dodge the\ndrops", 130, 155);
    cursor(HAND);
  }
    
  //witch outline text
  distance(700, 140);
  if (d < 40) {
    textFont(font);
    fill('pink');
    textSize(50);
    text("Jump", 700, 150);
    cursor(HAND);
  }
  
  //Pong outline
  distance(width/2,height/1.25);
  if (d < 45) {
    textFont(font);
    fill('lightblue');
    textSize(50);
    text("Pong", width/2.1,height/1.2);
    cursor(HAND);
  }

    //Settings
    distance(75,height/1.2);
  if (d < 70) {
    settingsHover.resize(125,125);
    image(settingsHover, 30, height/1.35);
    cursor(HAND);
  }

  
  
    
  //--------Floating text------------------
     
    for (let i = 0; i < message.length; i++) {
      //textFont(font);
      textSize(50);
      textFont(font);
    const letterX = messageX + textWidth(message.substring(0, i));

    const letterOffset = i * verticalLetterSpacing;
    const letterY = height / 1.68 +
      sin((frameCount - letterOffset) * ySpeed) * amplitude;
    
    text(message[i], letterX, letterY);
  }

  messageX -= xSpeed;
  if (messageX < - textWidth(message)) {
    messageX = width + 50;
  }
//-----------------------------------------
  textFont(ka1);
}
function distance(X, Y) { 
d = Math.sqrt(((X - mouseX) * (X - mouseX) + (Y - mouseY) * (Y - mouseY)));
return d;
}

//Mouse click game options
this.mouseClicked = function() {
  if(dist(mouseX, mouseY, 130, 150) < 60){
    this.sceneManager.showScene(dtdmenu);
  }
   if(dist(mouseX, mouseY, 700, 120) < 50){
    this.sceneManager.showScene(jumpMenu);
  }
   if(dist(mouseX, mouseY, width/2,height/1.25) < 50){
    this.sceneManager.showScene(pongMenu);
  }
  if(dist(mouseX, mouseY, 75,height/1.2) < 70){
    this.sceneManager.showScene(settings);
  }
}
}