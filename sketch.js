var weight;
let img;
let imageRatio;
let temp1;
let temp2;
let temp3;
let temp4;
let temp5;
let temp6;

let btnArray = []; // Container for buttons

var realHeight;

var imageWidth;
var imageHeight;
var size;
var tempBut;

var scenenumber;

function setup()
{

  createCanvas(windowWidth, windowHeight); 
  size = windowHeight * windowWidth;

background(20,40,40);


img = loadImage("resources/4.png");

temp1 = loadImage("resources/1.png");
temp2 = loadImage("resources/2.png");

imageRatio = img.height / img.width;
realHeight = windowHeight;


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
  
  
}

function draw()
{
  
  size = Math.sqrt(windowHeight * windowWidth) 
  
  var imgWidth;
  var imgHeight;
  var asdf;
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
  //console.log("fire!");
  // widget
  strokeWeight(3);
  stroke(0);
  ellipse(windowWidth-60, mouseY, size / 15, size / 15);
// display
  displayScene();
  tempA = new WidgetButton(imgWidth*0.5, imgHeight * 0.87,imgWidth*0.85 ,imgHeight*0.15);
  tempA.display();
}

function windowResized() { 
  resizeCanvas(windowWidth, windowHeight); 
  
}

function sceneChange()
{
  // pop btn arraylist
  while(btnArray.size != 0) btnArray.pop();

  switch(scenenumber)
  {
    case 1: scene1(); break;
    case 2: scene2(); break;


  }

}

function scene1()
{
  img = temp1;
  // buttons 
  caramel = new WidgetButton(imgWidth*7/10, imgHeight * 8/12,imgWidth/20 ,imgHeight / 40);
  
  
  btnArray.push(caramel);
}

function scene2()
{
  img = temp2;
  // buttons 


}
function scene3()
{
  img = temp3;
  // buttons 

}

function displayScene()
{
  for (button in btnArray)
  {
    
    button.updatePos(imgWidth*7/10, imgHeight * 21/32,imgWidth/9 ,imgHeight / 30);
    button.display();
   
  }
  
  
}


class WidgetButton {
  constructor(xpos, ypos, sizex, sizey) {
    this.x = xpos;
    this.y = ypos;
    
    this.diameterX = sizex;
    this.diameterY = sizey;
  }

  updatePos(xPos, yPos, sizex, sizey)
  {
    this.x = xPos;
    this.y = yPos;

    this.diameterX = sizex;
    this.diameterY = sizey;
  }

  display() {
    fill(0,0,0,0);
    stroke(255,0,0);
    strokeWeight(1);

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
