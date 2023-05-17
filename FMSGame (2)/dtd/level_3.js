//Author Ali Kefel
let circles3 = [];
let hit3 = 0;




function level_3() {
  //screenMode = 3;
  characterRadius = 25;
  this.setup = function() {
    createCanvas(900, 600);
    screenMode = 3;

    dropfall3();

    //game = new CircleDrop();
    //game.enter();
    for (i = 0; i < 4; i++) {
      heartARR.push(heartPNG);
    }
  }

  this.draw = function() {

    console.log("level 3 runtime: " + startTimer());

    imageMode(CORNERS);
    image(BGlevel3, 0, 0, 900, 600);
    image(cloud2, 0, 120, 900, 600)

    textFont(mullers);
    textSize(60);
    textStyle(BOLD);
    textAlign(CENTER);

    imageMode(CENTER)
    image(umbrella, mouseX, mouseY, 200, 200);

    noStroke();
    fill("white")
    text("Level 3!", 450, 100);
    text(hit3, 200, 200)

    textSize(30);
    textFont(segmentFont);
    text("Timer: " + timer, 200, 300)

    //game.draw();
    for (let i = 0; i < circles3.length; i++) {
      let circle = circles3[i];
      circle.fall();

      if (circle.y > height) {
        circle.y = random(-height, 0);
      }
      //Collision detection
      let distance = dist(circle.x, circle.y, mouseX, mouseY);

      if (distance < 25) {
        //console.log(hit);
        hit3++;
        remainingHearts--;
        heartARR.splice(i, 1);
        circles3.splice(i, 1);
      }

      if (hit3 >= 4) {
        //scenemanager.showScene(gameOver)
        screenMode = 10;
      }

      if (timer <= 0) {
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

    if (hit <= 4) {
      for (i = 0; i < remainingHearts; i++) {
        imageMode(CENTER);
        image(heartPNG, 75 + i * 75, 75, 50, 50);
      }
    }
  }

}


function resetVariables3() {
  remainingHearts = 4;
  timer = 60;
  hit3 = 0;
  circles3 = [];
  let i = 0;
}

function dropfall3() {
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(-height, 0);
    let speed = random(7, 8);
    let size = random(60, 70);
    let sizex = random(40, 50);
    let sizey = random(40, 50);
    let circle = new Circle(x, y, speed, sizex, sizey);
    circles3.push(circle);
  }
}