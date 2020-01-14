var weight;
let img;
function setup()
{
createCanvas(windowWidth, windowHeight); 
background(20,40,40);

strokeWeight(10);
img = loadImage('resources/temp.jpg');

weight = 3;
}

function draw()
{
  
  strokeWeight(weight);

  stroke(255,0,0);
  triangle(mouseX, mouseY,110,100,200,100);

  strokeWeight(weight);

  stroke(20,241,20);
  triangle(mouseY, mouseX,400,320,160,140);


  stroke(200,0,0);
  fill(255);
  strokeWeight(weight);
  textSize(30);

  text('마우스 위치', mouseX-50,mouseY);
  image(img, 0, 0, windowWidth, windowHeight);
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }