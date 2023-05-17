class Raindrop{
  
  constructor(x, y, w, h, speed) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = speed;
    this.drops = [];
    this.color = color(255);
  }

  setColor(c) {
    this.color = c;
  }
//this.y + this.h
  update() {
    for (let i = 0; i < this.drops.length; i++) {
      let drop = this.drops[i];
      drop.y += this.speed;
      if (drop.y > height - 10) {
        this.drops.splice(i, 1);
      }
    }
    if (random(1) < 0.2) {
      let drop = createVector(random(this.x, this.x + this.w), this.y);
      this.drops.push(drop);
    }
  }

  display() {
    stroke(this.color);
    strokeWeight(2);
    for (let i = 0; i < this.drops.length; i++) {
      let drop = this.drops[i];
      line(drop.x, drop.y, drop.x, drop.y + 10);
    }
  }
}
