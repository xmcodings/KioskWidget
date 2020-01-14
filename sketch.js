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

var scenenumber;

function setup()
{

  createCanvas(windowWidth, windowHeight); 
  size = windowHeight * windowWidth;

background(20,40,40);


img = loadImage("resources/1.png");

temp1 = loadImage("resources/1.png");
temp2 = loadImage("resources/2.png");

temp3 = loadImage("resources/3.png");
temp4 = loadImage("resources/4.png");

temp5 = loadImage("resources/5.png");
temp6 = loadImage("resources/6.png");



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
<<<<<<< HEAD
  scenenumber = 1;
  scene1But1 = new WidgetButton(imgWidth*7/10, imgHeight * 8/12,imgWidth/20 ,imgHeight / 40, false);
  scene2But1 = new WidgetButton(imgWidth*7/10, imgHeight * 8/12,imgWidth/20 ,imgHeight / 40, false);

  scene1But1.setActive(true);
=======
  
>>>>>>> bad9f2afb55ced02b0c74a49aae10201024c61bc
  

}

function draw()
{
  
  size = Math.sqrt(windowHeight * windowWidth) 
  
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
  // widget
  strokeWeight(3);
  stroke(0);
  ellipse(windowWidth-60, mouseY, size / 15, size / 15);
<<<<<<< HEAD
=======
// display
  displayScene();
  
>>>>>>> bad9f2afb55ced02b0c74a49aae10201024c61bc
  
  displayScene();

}

function windowResized() { 
  resizeCanvas(windowWidth, windowHeight); 
  
}

function scene1()
{
  scene1But1.display();
  scene1But1.updatePos(imgWidth*7/10, imgHeight * 21/32,imgWidth/9 ,imgHeight / 30);
  
  if(scene1But1.isClick())
  {
<<<<<<< HEAD
    scenenumber = 2;
    img = temp2;
=======
    case 1: scene1(); break;
    case 2: scene2(); break;

>>>>>>> bad9f2afb55ced02b0c74a49aae10201024c61bc

  }

}
<<<<<<< HEAD
=======

function scene1()
{
  img = temp1;
  // buttons 
  caramel = new WidgetButton(imgWidth*7/10, imgHeight * 8/12,imgWidth/20 ,imgHeight / 40);

  
  btnArray.push(caramel);
}

>>>>>>> bad9f2afb55ced02b0c74a49aae10201024c61bc
function scene2()
{
  

}
function scene3()
{
  img = temp3;
  // buttons 


}

function displayScene()
{
<<<<<<< HEAD
  switch(scenenumber)
  {
    case 1: scene1();
     break;
    case 2: scene2();
      break;
    case 3: scene3();
      break;
    default:
      break;
  }
=======
  for (button in btnArray)
  {
    button.display();
    button.updatePos(imgWidth*7/10, imgHeight * 21/32,imgWidth/9 ,imgHeight / 30);
    if(button.isClick())
    {

    }
  }
  
  
>>>>>>> bad9f2afb55ced02b0c74a49aae10201024c61bc
}


class WidgetButton {
  constructor(xpos, ypos, sizex, sizey, active) {
    this.x = xpos;
    this.y = ypos;
    
    this.diameterX = sizex;
    this.diameterY = sizey;
    this.isactive = active;
  }

  updatePos(xPos, yPos, sizex, sizey)
  {
    this.x = xPos;
    this.y = yPos;

    this.diameterX = sizex;
    this.diameterY = sizey;
  }

  display() {
    
    if(this.isactive)
    {
      console.log("displayingsdhb");  
    fill(0,0,0,0);
    stroke(255,0,0);
    strokeWeight(1);

    ellipse(this.x, this.y, this.diameterX, this.diameterY);
    }
    else{

    }
  }

  setActive(setValue)
  {
    this.isactive = setValue;
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
    if(this.isactive && this.isOver() && mouseIsPressed)
    {
      return true;
    }
    return false;
  }

}
