var weight;
let img;

var imageWidth;
var imageHeight;

function setup()
{
  
createCanvas(windowWidth, windowHeight); 

background(20,40,40);
img = loadImage('resources/temp.jpg');
strokeWeight(10);

tempBut = new WidgetButton();
background(20,40,40);
img = loadImage("resources/temp.jpg");


weight = 3;
}

function draw()
{
  image(img, 0, 0, windowWidth, windowHeight);

  ellipse(windowWidth-60, mouseY, 50, 50);

  tempBut.move();
  tempBut.display();

  
}

function windowResized() { resizeCanvas(windowWidth, windowHeight); }

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

}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }