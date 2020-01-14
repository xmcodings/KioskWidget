var weight;
let img;
let icon;
let c;
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



  
icon = loadImage('resources/WidgetIcon.png');

widget = new Widget(icon);


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
  scenenumber = 1;
  scene1But1 = new WidgetButton(imgWidth*7/10, imgHeight * 8/12,imgWidth/20 ,imgHeight / 40, false);
  scene2But1 = new WidgetButton(imgWidth*7/10, imgHeight * 8/12,imgWidth/20 ,imgHeight / 40, false);

  scene1But1.setActive(true);
  

}

function draw()
{
// display
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
  displayScene();
  widget.display();

}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }

class Widget {
    constructor(icon){
      this.icon = icon;
      this.widget_height= mouseY;
      this.count = false;
      this.button = new WidgetButton(windowWidth-60, this.widget_height, 50, 50, true);
      this.menu1 = new WidgetButton(windowWidth-155,this.widget_height-20,20,20,true);
      this.menu1.changeStatus(false);
      this.menu2 = new WidgetButton(windowWidth-155,this.widget_height+20,20,20,true);
      this.menu2.changeStatus(false);
    }

    display(){
      this.update();
      strokeWeight(3);
      if(this.count){
        c = color('rgba(255,255,255, 1)');
        fill(c);
        arc(windowWidth-60, this.widget_height, 200, 200, PI, PI + QUARTER_PI,PIE);
        arc(windowWidth-60, this.widget_height, 200, 200, PI-QUARTER_PI, PI,PIE);

        c = color('rgba(0,0,0,1)');
        fill(c);
        textSize(15);
        text('차차모드',windowWidth-155,this.widget_height-20);
        text('음성안내',windowWidth-155,this.widget_height+20);

        c = color('rgba(255,255,255, 1');
      }
      else{
        c = color('rgba(255,255,255, 0.3)');
      }
      fill(c);
      ellipse(windowWidth-60, this.widget_height, 50, 50);
      image(icon,windowWidth-82,this.widget_height-12,40,20);
    }

    update(){
      if(this.button.isClick()) {
        this.count = true;
        this.menu1.changeStatus(true);
        this.menu2.changeStatus(true);
      }
      else{
        this.widget_height = mouseY;
        this.button.moveButton(windowWidth-60, this.widget_height);
        this.count = false;
        this.menu1.changeStatus(false);
        this.menu2.changeStatus(false);
      }
    }
}

function scene1()
{
  scene1But1.display();
  scene1But1.updatePos(imgWidth*7/10, imgHeight * 21/32,imgWidth/9 ,imgHeight / 30);
  
  if(scene1But1.isClick())
  {
    console.log("clicked!!!");
    scenenumber = 2;
    img = temp2;

  }

}

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
}


class WidgetButton {

  constructor(xpos, ypos, sizex, sizey, active) {
    this.x = xpos;
    this.y = ypos;
    
    this.diameterX = sizex;
    this.diameterY = sizey;

    this.isactive = active;
    this.clicked = false;
    this.status = true;
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
      //console.log("displayingsdhb");  
    fill(0,0,0,0);
    stroke(0,0,0);
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
      if(this.isOver()){
        this.clicked = true;
      }
      else{
        this.clicked = false;
      }
      return true;
    }
    return false;

  }
  moveButton(xpos, ypos){
    this.x = xpos;
    this.y = ypos; 
  }

  changeStatus(status){
    this.status = status;
  }
}
