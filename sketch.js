var weight;
let img;
let icon;


function setup()
{
  
createCanvas(windowWidth, windowHeight); 
background(20,40,40);
img = loadImage('resources/temp.jpg');
icon = loadImage('resources/WidgetIcon.png');
}

function draw()
{
  fill('rgba(0,0,0, 0.25)');
  strokeWeight(3);
  image(img, 0, 0, windowWidth, windowHeight);
  ellipse(windowWidth-60, mouseY, 50, 50);
  image(icon,windowWidth-82,mouseY-12,40,20);
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }