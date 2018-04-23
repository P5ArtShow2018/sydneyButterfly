

function preload(){
butterfly = loadImage("Assets/butterfly.png")
}


function setup() {
createCanvas(500,500);
  
}

function draw() {
  noStroke();
  background(0,200,200);
  image(butterfly,mouseX, mouseY);
  fill(255);
  ellipse(140,160,50);
  fill(255);
  ellipse(180,160,70);
  fill(255);
  ellipse(210,160,50);
  fill(255);
  ellipse(340,160,70)
  fill(255);
  ellipse(310,160,50);
  fill(255);
  ellipse(370,160,50);
  fill(255);
  ellipse(100,70,70);
  fill(255);
  ellipse(140,70,50);
  fill(255);
  ellipse(60,70,50);
  fill(255);
  ellipse(270,70,70)
  fill(255);
  ellipse(230,70,50);
  fill(255);
  ellipse(315,70,50);
  fill(242,255,0,80);
  //ellipse(490,20,80);
  triangle(500,0,100,600,-150,430)
  
  
}