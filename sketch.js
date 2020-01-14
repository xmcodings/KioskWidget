var weight;
let img;
let imageRatio;
var realHeight;

var imageWidth;
var imageHeight;
var size;

function setup()
{
createCanvas(windowWidth, windowHeight); 
size = windowHeight * windowWidth;

background(20,40,40);
tempBut = new WidgetButton(50,50,10);

img = loadImage("resources/temp.jpg");
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

  tempBut.display();
}

function windowResized() { 
  resizeCanvas(windowWidth, windowHeight); 
  
}

class WidgetButton {
  constructor(xpos, ypos, size) {
    this.x = xpos;
    this.y = ypos;
    this.diameter = size;
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
    this.isClick();
  }

  isOver()
  {
    if(mouseX > this.x - this.diameter/2 && mouseX < this.x + this.diameter/2)
    {
      if(mouseY > this.y - this.diameter/2 && mouseY < this.y + this.diameter/2 )
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
      this.x = random(windowWidth);
      this.y = random(windowHeight);
      this.diameter = random(10, 30);
    }
  }

}
