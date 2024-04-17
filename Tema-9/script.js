class Pawn {
    constructor(x, y, color) {
      this.x = x; // Coordonata x a pionului
      this.y = y; // Coordonata y a pionului
      this.color = color; // Culoarea pionului (negru sau alb)
    }
  
    display() {
      fill(this.color); // Setează culoarea umplerii pionului
      stroke(this.color === 'white' ? 'black' : 'white'); // Setează culoarea conturului pionului (negru pentru alb, alb pentru negru)
      ellipse(this.x * squareSize + squareSize / 2, this.y * squareSize + squareSize / 2, squareSize / 2, squareSize / 2); // Desenează pionul
    }
  }
  
  class Board {
    constructor(size) {
      this.size = size; // Dimensiunea tablei (8x8)
      this.squares = []; // Matrice pentru pătratele tablei
      this.generateBoard(); // Generează tabla de șah
    }
  
    generateBoard() {
      for (let i = 0; i < this.size; i++) {
        let row = [];
        for (let j = 0; j < this.size; j++) {
          let color = (i + j) % 2 == 0 ? 'white' : 'black'; // Pun pe rand alb sau negru
          row.push(color);
        }
        this.squares.push(row);
      }
    }
  
    display() {
      for (let i = 0; i < this.size; i++) {
        for (let j = 0; j < this.size; j++) {
          fill(this.squares[i][j]); // Setează culoarea umplerii pătratului
          rect(i * squareSize, j * squareSize, squareSize, squareSize); // Desenează pătratul
        }
      }
    }
  }
  
  let boardSize = 8;
  let squareSize;
  let blackPawns = [];
  let whitePawns = [];
  let board;
  
  function setup() {
    createCanvas(400, 400);
    squareSize = width / boardSize; // Calculează dimensiunea unui pătrat
    board = new Board(boardSize); // Inițializează tabla de șah
  
    // 8 pionii negri random
    while (blackPawns.length < 8) {
      let col = floor(random(boardSize));
      let row = floor(random(boardSize / 2));
      if (!blackPawns.some(p => p.x === col && p.y === row)) {
        blackPawns.push(new Pawn(col, row, 'black'));
      }
    }
  
    // 8 pionii albi random
    while (whitePawns.length < 8) {
      let col = floor(random(boardSize));
      let row = floor(random(boardSize / 2, boardSize));
      if (!whitePawns.some(p => p.x === col && p.y === row)) {
        whitePawns.push(new Pawn(col, row, 'white'));
      }
    }
  }
  
  function draw() {
    background(255);
    board.display();
  
    // Afișează pionii negri
    for (let pawn of blackPawns) {
      pawn.display();
    }
  
    // Afișează pionii albi
    for (let pawn of whitePawns) {
      pawn.display();
    }
  }
  