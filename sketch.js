var weight;
let img;
let imageRatio;
var realHeight;

function setup()
{
  
createCanvas(windowWidth, windowHeight); 

background(20,40,40);
img = loadImage("resources/temp.jpg");
imageRatio = img.height / img.width;
weight = 3;
realHeight = windowHeight;
}

function draw()
{
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

}

function windowResized() { resizeCanvas(windowWidth, windowHeight); }


