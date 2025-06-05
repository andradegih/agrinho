let cenario;
let tartaruga;
let x = 200;
let y = 300;

function preload() {
  
  cenario = loadImage('imagem.png');      
  tartaruga = loadImage('tartaruga.png');  
}

function setup() {
  createCanvas(1000, 900);
}

let viradaParaEsquerda = false; 

function draw() {
  image(cenario, 0, 0, width, height);

 
  if (keyIsDown(65)) { // A (esquerda)
    x -= 5;
    viradaParaEsquerda = true;
  }
  if (keyIsDown(68)) { // D (direita)
    x += 5;
    viradaParaEsquerda = false;
  }
  if (keyIsDown(87)) { // W (cima)
    y -= 5;
  }
  if (keyIsDown(83)) { // S (baixo)
    y += 5;
  }


  push(); 
  translate(x + 10, y + 10); 
  if (viradaParaEsquerda) {
    scale(-1, 1); 
  }
  image(tartaruga, -40, -30, 250, 200); 
  pop(); 

  
 
  
}
