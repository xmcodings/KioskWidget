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

tempBut = new WidgetButton(50,50,10);
background(20,40,40);
img = loadImage("resources/temp.jpg");


}

function draw()
{
  image(img, 5, 5, windowWidth-5, windowHeight-5);
  size = Math.sqrt(windowHeight * windowWidth) 
  ellipse(windowWidth-60, mouseY, size / 15, size / 15);

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
function windowResized() { resizeCanvas(windowWidth, windowHeight); }