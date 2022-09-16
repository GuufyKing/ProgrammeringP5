
let x;
let y;
let speed = 3;
let a = speed;
let b = 0;
let d = 20;
let imgSize = 100;
let s = "Hello Github"

function preload() {
  img = loadImage('Jerry.jpg');
 }

function setup() {
  createCanvas(1300, 600);
  x = random(0, width); 
  y = random(0, height); 

}

function draw() {
  background('Backrooms.jpg');
  image(img, x, y, 100, 100);//circle(x,y,d)
  x+=speed*a;
  y+=speed*b;
  borderCheck();

}

function borderCheck() {
  if (x + d / 2 >= width-imgSize) {
    a = -speed;
    b = 0;
  }
  if (x - d / 2 <= 0) {
    a = speed;
    b = 0;
  }
  if (y + d / 2 >= height-imgSize) {
    a = 0;
    b = -speed;
  }
  if (y - d / 2 < 0) {
    a = 0;
    b = speed;
  }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    b = speed;
    a = 0;
  }
  if (keyCode === UP_ARROW) {
    b = -speed;
    a = 0;
  }
  if (keyCode === LEFT_ARROW) {
    b = 0;
    a = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    b = 0;
    a = speed;
  }
 }

 function preload() {
  img2 = loadImage('ChickenDrip.jpg');
 }

 function draw() {
  background(10);
  image(img2, xpos, ypos, 100, 100);//circle(x,y,d)
  xpos+=speed*c;
  ypos+=speed*d;
  borderCheck();

 }

 function borderCheck() {
  if (x + d / 2 >= width-imgSize) {
    c = -speed;
    d = 100;
  }
  if (x - d / 2 <= 0) {
    c = speed;
    d = 100;
  }
  if (y + d / 2 >= height-imgSize) {
    c = 100;
    d = -speed;
  }
  if (y - d / 2 < 0) {
    c = 100;
    d = speed;
  }
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
    d = speed;
    c = 100;
  }
  if (keyCode === UP_ARROW) {
    d = -speed;
    c = 100;
  }
  if (keyCode === LEFT_ARROW) {
    d = 100;
    c = -speed;
  }
  if (keyCode === RIGHT_ARROW) {
    d = 100;
    c = speed;
  }
 }