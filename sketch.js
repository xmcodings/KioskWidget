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

let caramelSound;
let backSound;
let plusSound;
let minusSound;
let discountSound;
let pointSound;
let paySound;
let completeSound;

var imgHeight;
var imgWidth;
var drinkcount;

let btnArray = []; // Container for buttons

var realHeight;

var imageWidth;
var imageHeight;
var size;

var scenenumber;
var mouseClick;

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

soundFormats('mp3', 'ogg');

caramelSound = loadSound('audio/caramel.mp3');
backSound = loadSound('audio/back.mp3')
minusSound = loadSound('audio/minus.mp3')
plusSound = loadSound('audio/plus.mp3')
discountSound = loadSound('audio/discount.mp3')
pointSound = loadSound('audio/point.mp3');
paySound = loadSound('audio/pay.mp3');
completeSound = loadSound('audio/complete.mp3');

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
  scene2Minus = new WidgetButton(imgWidth*9/20, imgHeight * 21/32,imgWidth/15 ,imgHeight / 15, false);
  scene2Plus = new WidgetButton(imgWidth*41/64, imgHeight * 21/32,imgWidth/15 ,imgHeight / 15, false);
  scene2Select = new WidgetButton(imgWidth*2/3, imgHeight * 29/32,imgWidth/3.5 ,imgHeight / 15, false);
  scene2Back = new WidgetButton(imgWidth*1/3, imgHeight * 29/32,imgWidth/4 ,imgHeight / 15, false);

  scene3But1 = new WidgetButton(imgWidth*0.5, imgHeight * 0.75,imgWidth * 0.9 ,imgHeight * 0.3, false);

  scene4But1 = new WidgetButton(imgWidth*0.5-20, imgHeight * 0.87,imgWidth * 0.45 ,imgHeight * 0.15, false);

  scene5But1 = new WidgetButton(imgWidth*0.5+20, imgHeight * 0.47,imgWidth * 0.45 ,imgHeight * 0.15, false);
  scene6But1 = new WidgetButton(0, 0,imgWidth * 0.45 ,imgHeight * 0.15, false);


  scene1But1.setActive(true);
  

}

function draw()
{
// display
mouseRelease = false;
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
      this.ytemp = mouseY;
      this.widget_height = 0;
      this.count = false;
      this.button = new WidgetButton(imgWidth-40, this.widget_height, 50, 50, true);
      this.menu1 = new WidgetButton(imgWidth-135,this.widget_height-20,20,20, true);
      this.menu1.changeStatus(false);
      this.menu2 = new WidgetButton(imgWidth-135,this.widget_height+20,20,20, true);
      this.menu2.changeStatus(false);
    }

    display(){
      this.update();
      strokeWeight(3);
      if(this.count){
        c = color('rgba(255,255,255, 1)');
        fill(c);
        this.widget_height = this.ytemp;
        arc(imgWidth-40, this.widget_height, 200, 200, PI, PI + QUARTER_PI,PIE);
        arc(imgWidth-40, this.widget_height, 200, 200, PI-QUARTER_PI, PI,PIE);
        c = color('rgba(0,0,0,1)');
        fill(c);
        textSize(15);
        text('차차모드',imgWidth-135,this.widget_height-20);
        text('음성안내',imgWidth-135,this.widget_height+20);
        
        c = color('rgba(255,255,255, 1');
        
        this.menu1.display();
        
        this.menu2.display();
        
        if(this.menu1.isClick())
        {
          this.count = false;
        }
        if(this.menu2.isClick())
        {
          this.count = false;
        }

      }
      else{
        c = color('rgba(255,255,255, 0.3)');
      }
      fill(c);
      ellipse(imgWidth-40, this.widget_height, 50, 50);
      image(icon,imgWidth-62,this.widget_height-12,40,20);
    }

    update(){
      if(this.button.isClick()) {
        
        if(!this.count)
        {
          this.count = true;
          this.ytemp = this.widget_height;
        }
        else{
          this.count = false;
        } 
        this.menu1.changeStatus(true);
        this.menu2.changeStatus(true);
        
      }
      else{
        this.widget_height = 50;
        this.button.moveButton(imgWidth-40, this.widget_height);
        this.menu1.changeStatus(false);
        this.menu2.changeStatus(false);
      }
    }
}

function scene1()
{
  img = temp1;
  scene1But1.setActive(true);
  scene1But1.display();
  scene1But1.updatePos(imgWidth*7/10, imgHeight * 21/32,imgWidth/9 ,imgHeight / 30);
  
  if(scene1But1.isClick())
  {
    console.log("clicked!!!");
    scenenumber = 2;
    
    caramelSound.play();
    scene1But1.setActive(false);
  }

}

function scene2()
{
  img = temp2;
  scene2Back.setActive(true);
  scene2Minus.setActive(true);
  scene2Plus.setActive(true);
  scene2Select.setActive(true);
  scene2Minus.display();
  scene2Plus.display();
  scene2Select.display();
  scene2Back.display();
  

  if(scene2Back.isClick())
  {
    scenenumber = 1;
    scene2Back.setActive(false);
    scene2Minus.setActive(false);
    scene2Plus.setActive(false);
    scene2Select.setActive(false);
    
    backSound.play();

  }
  if(scene2Minus.isClick())
  {
    
    minusSound.play();
  }
  if(scene2Plus.isClick())
  {
    
    plusSound.play();
  }

  if(scene2Select.isClick())
  { 
    scenenumber = 3;
    scene2Back.setActive(false);
    scene2Minus.setActive(false);
    scene2Plus.setActive(false);
    scene2Select.setActive(false);
    
    discountSound.play();

  }


}
function scene3()
{
  img = temp3;
  scene3But1.setActive(true);
  scene3But1.display();

  if(scene3But1.isClick())
  {
    scenenumber = 4;
    scene3But1.setActive(false);

    pointSound.play();
  }

}

function scene4()
{
  img = temp4;
  scene4But1.setActive(true);
  scene4But1.display();

  if(scene4But1.isClick())
  {
    console.log("kkk");
    scenenumber = 5;
    scene4But1.setActive(false);

    paySound.play();
  }

}
function scene5()
{
  img = temp5;
  scene5But1.setActive(true);
  scene5But1.display();
  if(scene5But1.isClick())
  {
    scenenumber = 6;
    completeSound.play();
    scene5But1.setActive(false);
  }
  
}
function scene6()
{
  img = temp6;
  scene6But1.setActive(true);
  scene6But1.display();
  if(scene6But1.isClick())
  {
    scenenumber = 1;
    scene6But1.setActive(false);
  }
  
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
    case 4: scene4();
      break;
    case 5: scene5();
       break;
    case 6: scene6();
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

    if(this.isactive && this.isOver() && mouseIsPressed && mouseClick)
    {
      if(this.isOver()){
        this.clicked = true;
      }
      else{
        this.clicked = false;
      }
      mouseClick = false;
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

function mouseClicked()
{
  mouseClick = true;
  console.log("mouseclik");

}

