
class Circle {
  constructor(x, y, speed, sizex, sizey) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sizex = sizex;
    this.sizey = sizey;
  }
  
  display() {
    image(dropPNG, this.x, this.y, this.sizex, this.sizey);
    //1circle(this.x, this.y, this.size);
  }
  
  fall() {
    this.y += this.speed;
  }
  
  isOffScreen() {
    if (this.y > height + 10) {
      return true;
    } else {
      return false;
    }
  }

  
}