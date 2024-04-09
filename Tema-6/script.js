function setup() {
  createCanvas(500, 400);
}

function draw() {
  background("blue");
  
  // Moon
  fill('white');
  ellipse(390, 90, 80, 80);
  
  // House
  fill('rgb(126,181,126)');
  rect(100, 200, 200, 200);
  
  // Roof
  fill('red');
  triangle(80, 200, 320, 200, 200, 40);
  
  // Window roof
  fill('yellow');
  ellipse(200, 120, 30, 20);
  
  // Chimney
  fill('rgb(126,181,126)');
  rect(130, 90, 40, 70);
  
  // Name house
  fill('black')
  textSize(20)
  text('Resedința Adam', 130, 190);
  
  // Door
  fill('rgb(192,41,41)');
  rect(175, 310, 50, 90);
  
  // Windows
  fill('yellow');
  rect(130, 250, 50, 50);
  line(130, 275, 180, 275);
  line(155, 250, 155, 300);
  rect(220, 250, 50, 50);
  line(270, 275, 220, 275);
  line(245, 300, 245, 250);
  
}