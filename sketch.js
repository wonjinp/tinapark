function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
}

function draw() {
  background(220);
  
  circle(300,500,200);
  fill(100,200,10,50);
  circle(825,310,80);
  noFill();
  circle(700,400,30);
  circle(1000,100,60);
  fill(200,100,50,70);
  circle(1000,400,400);
  
  strokeWeight(50);
  stroke('tomato');
  point(850, 240);
  point(300, 600);
  strokeWeight(30);
  point(250, 800);
  point(800, 400);
  point(1300, 400);
  point(400,1000);
  strokeWeight(1);
  
  let t = map(mouseX,mouseY,width, -5,5);
  curveTightness(t);
  fill('orange');
  beginShape(circle(1000,1000,1000));
  noFill();
  curveVertex(300,260);
  curveVertex(300,260);
  curveVertex(850,240);
  curveVertex(800,600);
  curveVertex(300,600);
  curveVertex(250,650);
  endShape();
  
   let b = map(mouseX,mouseY,width, -5,5);
  curveTightness(b);
  fill('powderblue')
  beginShape(circle(800, 150, 200));
  noFill();
  curveVertex(500,300);
  curveVertex(400,300);
  curveVertex(900,240);
  curveVertex(900,600);
  curveVertex(400,700);
  curveVertex(300,600);
  endShape();
  
  let a = map(mouseX,mouseY,width, -5,5);
  curveTightness(a);
  fill('olive')
  beginShape(circle(300,300,200));
  noFill();
  curveVertex(400,300);
  curveVertex(400,260);
  curveVertex(900,240);
  curveVertex(800,600);
  curveVertex(400,700);
  curveVertex(300,650);
  endShape();
  
  let c = map(mouseX,mouseY,width, -5,5);
  curveTightness(c);
  fill(100,0,200,50);
  beginShape(circle(300,500,450));
  noFill();
  curveVertex(700,300);
  curveVertex(400,260);
  curveVertex(900,240);
  curveVertex(1000,600);
  curveVertex(400,1000);
  curveVertex(500,650);
  endShape();
}