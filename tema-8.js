let cutii = [];

function setup() {
  createCanvas(800, 600);
  let index = 0;
  for (let j = 0; j < 4; j++) {
    for (let i = 0; i < 7; i++) {
      cutii[index] = new Cutie(index, i * 60 + 200, j * 60 + 150);
      index++;
    }
  }
}

function draw() {
  background('white');
  for (let i = 0; i < cutii.length; i++) {
    cutii[i].afiseaza();
  }
}

class Cutie {
  constructor(index, x, y) {
    this.x = x; // poziția pe axa x
    this.y = y; // poziția pe axa y
    this.dimensiune = 50; // dimensiunea cutiei
    this.culoare = color(random(255), random(255), random(255)); // culoarea cutiei
    this.index = index + 1; // numărul cutiei
  }

  afiseaza() {
    fill(this.culoare); // setează culoarea de umplere
    rect(this.x, this.y, this.dimensiune, this.dimensiune); // desenează un dreptunghi (cutia)
    fill('black'); // setează culoarea textului
    textAlign(CENTER, CENTER); // aliniază textul la centru
    text(this.index, this.x + this.dimensiune / 2, this.y + this.dimensiune / 2); // afișează numărul cutiei
  }
}
