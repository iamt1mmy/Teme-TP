const nrS= 100;
let s = nrS;

function setup() {
    createCanvas(700, 700)
}

function draw() {
    translate (300,300)
    if(s>0)
    for(i=0; i<nrS; i++) {
        rotate(-QUARTER_PI/7)
        square(0,0,s)
        s--;
    }
}