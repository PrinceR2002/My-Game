// Utilized a tool called scene-manager, using this repository: https://github.com/FSUdigitalmedia/p5js_stagesdemo.
// Scene manager created by Rahji.

//Pong Music
//  Kirby 64: Falling Fight
//  Kirby Planet Robobot: Core Kabula

  let mgr;
//Sound Effects 
  let jumpBackground;
  let jumpSnd;
  let bounceSnd;
  let gameMusic;
  let menuMusic;
  let winJingle;
  let pongMenuBackround;
  let loseJingle;
  let homeHover;
  let helpButton;
  let helpHover;
  let font;
  let ka1;
  let jumpBack;
  let thisfont;
  let start;
  let starthover;
  let birdHelp;
  let jumpHelpScene;
  let spacebar;
  let backButton;
  let backHover;
  let homeImage;
  let rocket;
  let chicken;
  let pong;
  let redball;
  let redBird;
  let blueBird;
  let pongBackground;
  let pongHTP;
  let paddle;
  let swipe;
  let mouse;
  let mullers;
  let waghu;
  let BG1;
  let cloud2;
  let BGlevel1;
  let umbrella
  let BGlevel2;
  let BGlevel3;
  let dtdBackground;
  let ship;
  let imgHelp;
  let dropPNG;
  let dropInterval = 6;
  let characterRadius;
  let timer = 10;
  let count = 0;
//let scenemanager;
let screenMode;

function setup() {
  createCanvas(800,600);
  mgr = new SceneManager();
  //scenemanager = new SceneManager();

    /*
  scenemanager.addScene(level_1);
  scenemanager.addScene(level_2);
  scenemanager.addScene(level_3);
  scenemanager.addScene(gameOver);
  scenemanager.addScene(victoryScreen);
  scenemanager.addScene(dtdmenu);
  */
  
  mgr.wire();
  mgr.showScene(home);
}

function preload(){
  //_____________________Home_________________________________
  homeImage = loadImage("homeAssets/mainMenu.jpeg");
  settings = loadImage("homeAssets/settings.png");
  settingsHover = loadImage("homeAssets/settingsHover.png");
  redball = loadImage("assets/redball.png");
  rocket = loadImage("homeAssets/rocket.png");
  pong = loadImage("homeAssets/ping-pong.png");
  redBird = loadImage("homeAssets/redBird.png");
  blueBird = loadImage("homeAssets/blue-bird.png");
  font = loadFont('Glossy Sheen Shine DEMO.ttf');
  ka1=loadFont('fonts/ka1.ttf');
  backButton=loadImage('homeAssets/back.png');
  backHover=loadImage('homeAssets/backblue.png');
  homeButton  =loadImage("escapeAssets/home.png");   
  homeHover =loadImage("escapeAssets/homeHover.png");
  helpButton =loadImage("homeAssets/help-web-button.png");
  helpHover =loadImage("homeAssets/help-web-button (1).png");
  start = loadImage('homeAssets/start.png');
  startHover = loadImage('homeAssets/startHover.png');
  //__________________________________________________________
  //_____________________DTD__________________________________
  mullers = loadFont("fonts/Mullers.otf");
  waghu = loadFont("fonts/KOMIKZ 400.ttf");
  BG1 = loadImage('assets/3.png');
  cloud2 = loadImage('assets/cloud2.png');
  BGlevel1 = loadImage('assets/BG.png');
  umbrella = loadImage('assets/Idle.png');
  BGlevel2 = loadImage('assets/1.png');
  BGlevel3 = loadImage('assets/nightbg.png');
  dropPNG = loadImage('assets/pngtree-vector-rain-drop-icon-png-image_312938-removebg-preview.png');
  yahoo = loadFont("fonts/Yahoo.TTF");
  bgmenu = loadImage("assets/bgmenu.jpeg");
  segmentFont = loadFont("fonts/Seven-Segment.ttf");
  heartPNG = loadImage('assets/love-always-wins.png');
  ship=loadImage('assets/shipHelp.png');
  imgHelp=loadImage('assets/imgHelp.png');
  dtdBackground = loadImage('assets/BG.png')

  //__________________________________________________________
  //_____________________Pong_________________________________
  
  bounceSnd = loadSound('Bounce.WAV');
  gameMusic = loadSound('GameMusic.mp3');
  menuMusic = loadSound('TitleMenu.mp3');
  winJingle = loadSound('Win.mp3');
  loseJingle = loadSound('Lose.mp3'); 
  //Placeholder spot for Player Goal Sound
  //Placeholder spot for Opponant Goal Sound
  

  pongBackground=loadImage("homeAssets/back_800x600.jpeg");
  pongHTP = loadImage('homeAssets/pongHTP.png');
  paddle = loadImage('homeAssets/paddle.png');
  swipe = loadImage('homeAssets/swipe-left.png');
  mouse = loadImage('homeAssets/wireless-mouse.png');
  pongMenuBackround = loadImage('PongMenuImg.jpg');
  
  //Placeholder spot for menu backround

  
  //__________________________________________________________
  //_____________________Jump_________________________________
  jumpBackground= loadImage("jumpAssets/jumpMenu.jpeg"); 
  jumpBack =loadImage('homeAssets/jumpBack.png');
  thisfont=loadFont('fonts/ka1.ttf');
  birdHelp=loadImage('jumpAssets/birdHelp.png');
  jumpHelpScene=loadImage('jumpAssets/jumpHelp.png');
  spaceBar=loadImage('homeAssets/spacebar.png');
  jumpSnd=loadSound('jumpAssets/jumpSnd.mp3');
  
  //_______________________________________________________________
}

function draw() {
  mgr.draw();
}

function startTimer() {
  //let seconds = millis()/1000; 
  if (frameCount % 30 == 0 && timer > 0) { 
    timer --;
  }
  return timer;
}