var weight;
let img;

var imageWidth;
var imageHeight;
var size;
function setup()
{
createCanvas(windowWidth, windowHeight); 
size = windowHeight * windowWidth;

background(20,40,40);
img = loadImage('resources/temp.jpg');
strokeWeight(2);

tempBut = new WidgetButton();
background(20,40,40);
img = loadImage("resources/temp.jpg");


}

function draw()
{
  image(img, 5, 5, windowWidth-5, windowHeight-5);
  size = Math.sqrt(windowHeight * windowWidth) 
  ellipse(windowWidth-60, mouseY, size / 15, size / 15);

  tempBut.move();
  tempBut.display();

  
}

function windowResized() { 
  resizeCanvas(windowWidth, windowHeight); 
  
}

class WidgetButton {
  constructor() {
    this.x = random(windowWidth);
    this.y = random(windowHeight);
    this.diameter = random(10, 30);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  isOver()
  {
    if(mouseX)
  }

}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }