var weight;
let img;
let imageRatio;
var realWidth;

function setup()
{
  
createCanvas(windowWidth, windowHeight); 

background(20,40,40);

img = loadImage('resources/temp.jpg');

strokeWeight(3);

tempBut = new WidgetButton();
imageRatio = img.height / img.width;

realWidth = windowWidth;
}

function draw()
{

  var imgWidth;
  var imgHeight;
  imageWidth = img.width;
  imageHeight = img.height;

  if (windowWidth *imageRatio < realWidth)
  {
    imgWidth = windowWidth;
    imgHeight = imgWidth * imageRatio;
  }
  else
  {
    imgWidth = windowHeight / imageRatio;
    imgHeight = windowHeight;
  }
  
  image(img, 0, 0, imgWidth, imgHeight);

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

