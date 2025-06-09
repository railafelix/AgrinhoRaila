function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}let arvores = []; // Array para armazenar as árvores
let pessoa = {
  x: 200,
  y: 350,
  tamanho: 30
}; // Objeto que representa a pessoa

function setup() {
  createCanvas(400, 400);
  // Cria algumas árvores aleatórias
  for (let i = 0; i < 10; i++) {
    arvores.push({
      x: random(width),
      y: random(height),
      tamanho: random(20, 50),
      vivo: true // Para controlar se a árvore está ativa ou não
    });
  }
}

function draw() {
  background(150, 200, 255); // Fundo do céu

  // Desenha as árvores
  for (let i = 0; i < arvores.length; i++) {
    if (arvores[i].vivo) {
      // Cor do tronco
      fill(100, 50, 0);
      rect(arvores[i].x, arvores[i].y + arvores[i].tamanho, 20, arvores[i].tamanho); // Tronco
      // Cor das folhas
      fill(0, 150, 0);
      ellipse(arvores[i].x + 10, arvores[i].y, arvores[i].tamanho, arvores[i].tamanho); // Folhas
    }
  }

  // Desenha a pessoa
  fill(255, 200, 0); // Cor da pessoa
  ellipse(pessoa.x, pessoa.y - pessoa.tamanho / 2, pessoa.tamanho, pessoa.tamanho); // Cabeça
  rect(pessoa.x - 5, pessoa.y - pessoa.tamanho / 2, 10, pessoa.tamanho); // Corpo
  // Braços
  line(pessoa.x, pessoa.y - pessoa.tamanho / 4, pessoa.x - 15, pessoa.y + 10);
  line(pessoa.x, pessoa.y - pessoa.tamanho / 4, pessoa.x + 15, pessoa.y + 10);
  // Pernas
  line(pessoa.x, pessoa.y + pessoa.tamanho / 2, pessoa.x - 10, pessoa.y + pessoa.tamanho);
  line(pessoa.x, pessoa.y + pessoa.tamanho / 2, pessoa.x + 10, pessoa.y + pessoa.tamanho);

  // Simulação do desmatamento (opcional)
  if (frameCount % 60 === 0) { // A cada 60 frames
    // Escolhe uma árvore aleatória para "desmatar"
    let indice = floor(random(arvores.length));
    if (arvores[indice].vivo) {
      arvores[indice].vivo = false; // Desativa a árvore
    }
  }
}

function mouseClicked() {
  // Se clicar numa árvore, "desmatar"
  for (let i = 0; i < arvores.length; i++) {
    if (arvores[i].vivo) {
      let distancia = dist(mouseX, mouseY, arvores[i].x + 10, arvores[i].y);
      if (distancia < arvores[i].tamanho / 2 + 10) { // Se clicado dentro da árvore
        arvores[i].vivo = false; // Desativa a árvore
        break; // Para no primeiro clicado
      }
    }
  }
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}let growth = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  background(220);
  
  // Solo
  fill(139, 69, 19);
  rect(150, 350, 100, 50);
  
  // Planta
  fill(34, 139, 34);
  rect(200, 350 - growth, 10, growth);
  ellipse(200, 350 - growth, 20, 20);
  
  // Crescimento
  if (growth < 100) {
    growth += 0.5;
  }
}




function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
}function setup() {
  createCanvas(400, 200); // Cria a tela com as dimensões
}

function draw() {
  background(220); // Define a cor de fundo da tela
  
  // Corpo do trator
  rect(50, 80, 100, 40); // Retângulo central
  rect(160, 80, 40, 40); // Parte traseira
  
  // Rodas (círculos)
  ellipse(75, 150, 20, 20); // Roda esquerda
  ellipse(150, 150, 20, 20); // Roda direita
  
  // Parte da frente do trator
  triangle(100, 80, 160, 80, 130, 60); // Triângulo para simular o chassi
  
  // Motor (retângulo)
  rect(100, 60, 40, 20);
}