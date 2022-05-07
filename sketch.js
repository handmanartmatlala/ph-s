let phd;
let bg;

function setup() {

  createCanvas(windowWidth, windowHeight);
  phd = loadImage('phd.gif');
  bg = loadImage('plaster.jpg');

  
}

function draw() {
  background(220);
  

  
    //grass
 for (var x = 0; x < width; x = x + random(320, 320)) {
    image(phd, 70 + x, 150, 150, 200);
  }
  

  
}
