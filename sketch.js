let bird = [];
numBirdy = 17;

var whichFrame = 0;
var delay = 80; //DELAY BETWEEN EACH FRAME
var nextTimer = 0;
let x, y;

let p;
let q;
let r;

// let bg;

function preload(){
for (let i = 0; i < numBirdy; i++){
  bird[i] = loadImage("bird"+i+".png");
}

cloud1 = loadImage("cloud0.png");
cloud2 = loadImage("cloud2.png");
cloud3 = loadImage("cloud3.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  nextTimer = millis() + delay;
  background(255);
  p = height;
  q = height;
  r = height;

  button = createImg('work2.png');
  button.position(windowWidth/2 , (windowHeight/2 - 100));
  button.mousePressed(gotolink);
  button.size(320, 200);

  button2 = createImg('work3.png');
  button2.position(windowWidth/2 -300, (windowHeight/2 - 50));
  button2.mousePressed(gotolink2);
  button2.size(320, 200);
  
}

function gotolink() {
	window.open('https://vimeo.com/lucyellis');
}

function gotolink2() {
	window.open('https://www.instagram.com/lucyellisart/');
}

function draw() {
    
  background(182, 216, 246);
  

  image(cloud1, p, 100, 250, 200);
  image(cloud2, q, 500, 300, 200);
  image(cloud3, r, 300, 300, 200);

  image(bird[whichFrame], mouseX, mouseY, 300, 300); //DRAWING ANIMATION

  if (millis()>nextTimer){ //IF STATEMENT SO THAT IT SWITCHES THROUGH THE FRAMES
      whichFrame = whichFrame + 1;
      if(whichFrame >= bird.length){
        whichFrame = 0;
      }
      nextTimer = millis() + delay;
  }

  fr = 10;
  frameRate(fr);

  p = p -7;
  q = q -4;
  r = r -10;

  if (p<0){
    p = width;
  }

  if (q<0){
    q = width;
  }

  if (r<0){
    r = width;
  }

  }