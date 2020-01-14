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
        c = color('rgba(255,255,255, 0.5)');
      }
      fill(c);
      ellipse(windowWidth-60, this.widget_height, 50, 50);
      image(icon,windowWidth-82,this.widget_height-12,40,20);
    }

    update(){
      if(true) {
        this.widget_height = mouseY;
        this.count = true;
      }
    }
}