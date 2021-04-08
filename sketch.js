function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);
}

function draw() {
  background(0); 
  translate(400,400);
  rotate(-90);
  
  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  stroke(255,0,0);
  noFill();
  let scAngle = map(sc, 0, 59, 0, 360)
  arc(0, 0, 400, 400, 0, scAngle);

  stroke(150,255,100);
  let mnAngle = map(mn, 0, 59, 0, 360)
  arc(0, 0, 370, 370, 0, mnAngle);

  stroke("blue");  
  let hrAngle = map(hr % 12, 0, 12, 0, 360)
  arc(0, 0, 340, 340, 0, hrAngle);

  push();
  rotate(scAngle);
  stroke(255,0,0);
  line(0,0,150,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(150,255,100);
  line(0,0,120,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("blue");
  line(0,0,90,0);
  pop();

  stroke(255);
  point(0,0);
 
//fill(255);
  //noStroke();
 // text(hr + ':' + mn + ':' + sc, 10, 200);
  drawSprites();
}