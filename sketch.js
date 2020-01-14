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

  text('마우스 위치', mouseX-50,mouseY);

  image(img, 0, 0, windowWidth, windowHeight);
}
function windowResized() { resizeCanvas(windowWidth, windowHeight); }