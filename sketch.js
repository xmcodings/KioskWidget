var weight;
let img;
let imageRatio;
var realHeight;

var imageWidth;
var imageHeight;
var size;
var tempBut;

function setup()
{
createCanvas(windowWidth, windowHeight); 
size = windowHeight * windowWidth;

background(20,40,40);
tempBut = new WidgetButton(50,50,10, 20); 

img = loadImage("resources/1.png");
imageRatio = img.height / img.width;
realHeight = windowHeight;


strokeWeight(3);

}

function draw()
{
  
  size = Math.sqrt(windowHeight * windowWidth) 
  ellipse(windowWidth-60, mouseY, size / 15, size / 15);

  var imgWidth;
  var imgHeight;
  imageWidth = img.width;
  imageHeight = img.height;

  if (windowWidth * imageRatio < realHeight)
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

  
}

function windowResized() { 
  resizeCanvas(windowWidth, windowHeight); 
  
}

class WidgetButton {
  constructor(xpos, ypos, sizeX, sizeY) {
    this.x = xpos;
    this.y = ypos;
    this.diameterX = sizeX;
    this.diameterY = sizeY;
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }

  isOver()
  {
    if(mouseX > this.x - this.diameterX/2 && mouseX < this.x + this.diameterY/2)
    {
      if(mouseY > this.y - this.diameterX/2 && mouseY < this.y + this.diameterY/2 )
      {
        return true;
      }
    }
    else{
      return false;
    }
  }

  isClick()
  {
    if(this.isOver() && mouseIsPressed)
    {
      return true;
    }
  }

}
