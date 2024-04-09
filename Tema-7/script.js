function setup() {
  createCanvas(700, 500);
}

function draw() {
  background('black');

  //Orbita1
  stroke('white')
  fill('black')
  ellipse(350, 250, 700, 350)
  
  //Orbita2
  stroke('white')
  fill('black')
  ellipse(350, 250, 550, 280)
  
  //Orbita3
  stroke('white')
  fill('black')
  ellipse(350, 250, 400, 210)
  
  //Orbita4
  stroke('white')
  fill('black')
  ellipse(350, 250, 250, 140)
  
  // Soarele
  fill('#FFC107');
  ellipse(350, 250, 130, 130);
  fill('white');
  textSize(20);
  text('SUN', 330, 255);
  
  // Planeta1
  fill('red');
  ellipse(180, 400, 70, 70);
  fill('white');
  textSize(20);
  text('P1', 170, 405);
  
  // Planeta2
  fill('green');
  ellipse(600, 200, 100, 100);
  fill('white');
  textSize(20);
  text('P2', 592, 205);
  
  // Planeta3
  fill('blue');
  ellipse(450, 290, 20, 20);
  fill('white');
  textSize(10);
  text('P3', 445, 293);
  
  // Planeta4
  fill('pink');
  ellipse(300, 150, 40, 40);
  fill('white');
  textSize(20);
  text('P4', 290, 155);
}
