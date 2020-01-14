var weight;
let img;
let imageRatio;
let temp2;
var realHeight;

var imageWidth;
var imageHeight;
var size;

function setup()
{
createCanvas(windowWidth, windowHeight); 
size = windowHeight * windowWidth;

background(20,40,40);
tempBut = new WidgetButton(50,50,10,20);

img = loadImage("resources/1.jpg");
temp2 = loadImage("resources/2.jpg");


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
  if(tempBut.isClick())
  {
    img = temp2;
  }
}

function windowResized() { 
  resizeCanvas(windowWidth, windowHeight); 
  
}

class WidgetButton {
  constructor(xpos, ypos, sizex, sizey) {
    this.x = xpos;
    this.y = ypos;
    this.diameterX = sizex;
    this.diameterY = sizey;
    
  }

  display() {
    fill(0,0,0,0);
    stroke(255,0,0);
    strokeWeight(3);

    ellipse(this.x, this.y, this.diameterX, this.diameterY);
    
  }

  isOver()
  {
    if(mouseX > this.x - this.diameterX/2 && mouseX < this.x + this.diameterX/2)
    {
      if(mouseY > this.y - this.diameterY/2 && mouseY < this.y + this.diameterY/2 )
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
    return false;
  }

}
