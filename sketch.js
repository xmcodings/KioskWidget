var weight;
let img;
let icon;
let c;

function setup()
{
  
createCanvas(windowWidth, windowHeight); 
background(20,40,40);
img = loadImage('resources/temp.jpg');
icon = loadImage('resources/WidgetIcon.png');
widget = new Widget(icon);
}

function draw()
{
  image(img, 0, 0, windowWidth, windowHeight);
  widget.display();
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }

class Widget {
    constructor(icon){
      this.icon = icon;
      this.widget_height= mouseY;
      this.count = false;
      this.button = new WidgetButton(windowWidth-60, this.widget_height, 50, 50);
      this.menu1 = new WidgetButton(windowWidth-155,this.widget_height-20,20,20);
      this.menu1.changeStatus(false);
      this.menu2 = new WidgetButton(windowWidth-155,this.widget_height+20,20,20);
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

class WidgetButton {
  constructor(xpos, ypos, sizex, sizey) {
    this.x = xpos;
    this.y = ypos;
    
    this.diameterX = sizex;
    this.diameterY = sizey;
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
    if(mouseIsPressed&&this.status)
    {
      if(this.isOver()){
        this.clicked = true;
      }
      else{
        this.clicked = false;
      }
    }
    return this.clicked;
  }

  moveButton(xpos, ypos){
    this.x = xpos;
    this.y = ypos; 
  }

  changeStatus(status){
    this.status = status;
  }
}