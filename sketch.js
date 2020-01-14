var weight;
let img;


function setup()
{
  
createCanvas(windowWidth, windowHeight); 
background(20,40,40);
img = loadImage('resources/temp.jpg');
strokeWeight(10);

weight = 3;
}

function draw()
{
  image(img, 0, 0, windowWidth, windowHeight);
  ellipse(windowWidth-60, mouseY, 50, 50);
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }