var weight;
let img;
let imageWidth;
let imageHeight;
let imageRatio;

function setup()
{
  
createCanvas(windowWidth, windowHeight); 



background(20,40,40);
img = loadImage("resources/temp.jpg");
imageWidth = img.width;
imageHeight = img.height;
imageRatio = img.height / img.width;
weight = 3;
}

function draw()
{
  if (windowWidth * imageRatio < windowHeight) {
    image(img, 0, 0, windowWidth, windowWidth * imageRatio);  
  }
  else {
    image(image, 0, 0, windowheight / imageRatio, windowheight)
  }
}

function windowResized() { resizeCanvas(windowWidth, windowHeight); }


