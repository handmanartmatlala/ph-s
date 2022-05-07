let phd;
let bg;
let mouth;

function setup() {

  createCanvas(windowWidth, windowHeight);
  phd = loadImage('phd.gif');
  bg = loadImage('plaster.jpg');
  mouth = loadImage('mouth.gif')
  
}

function draw() {
  background(220);
  

  
    //grass
 for (var x = 0; x < width; x = x + random(320, 320)) {
    image(phd, 70 + x, 150, 150, 200);
  }
  
  scale(0.5);
  image(mouth, mouseX, mouseY);
  
}