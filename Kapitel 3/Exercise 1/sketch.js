function setup() {
  createCanvas(300, 300);
  strokeWeight(8);
}

function draw() {
  background(204);
line(mouseX,mouseY,pmouseX,pmouseY);
console.log("Hello World!"); 
}

