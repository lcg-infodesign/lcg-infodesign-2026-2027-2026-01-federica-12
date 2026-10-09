let xMax = 400;
let yMax = 400;
let xCentro = xMax/2;
let yCentro = yMax/2;
let xLingua = 200;
let yLingua =205;

function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  background(200, 225, 240);

// lingua che si puove con il mouse
  xLingua = mouseX;
  yLingua = mouseY;

  // limite orizzontale
  if (xLingua < 192) {
    xLingua = 192;
  }
  if (xLingua > 208) {
    xLingua = 208;
  }

  // limite verticale
  if (yLingua < 200) {
    yLingua = 200;
  }
  if (yLingua > 208) {
    yLingua = 208;
  }
  
  push();
  noStroke();
  fill(250);
  rectMode(CENTER);

  for (let i = 0; i < 100; i++) {
  // 10 colonne e 10 righe (10*10=100 ossa) distanti 40 pixel tra loro
    
  let ox = (i % 10) * 40 + 20; //posizione orizzontale (colonna) di ciascun osso
  let oy = int(i / 10) * 40 + 20; //posizione verticale (riga) di ciascun osso
    
  // rettangolo in mezzo
  rect(ox, oy, 16, 6);

  // 2 cerchi a sinistra
  circle(ox - 8, oy - 3, 6);
  circle(ox - 8, oy + 3, 6);

  // 2 cerchi a destra
  circle(ox + 8, oy - 3, 6);
  circle(ox + 8, oy + 3, 6);
  }
  pop();
  
  push();
  noStroke();
  rectMode(CENTER);

  //rettangolo blu sx
  fill(120, 180, 220);
  rect(xCentro-20, yCentro-70, 40, 80);

  //rettangolo bianco dx
  fill(250);
  rect(xCentro+20, yCentro-70, 40, 80);

  //collo
  fill(120, 180, 220);
  rect(xCentro, yCentro+5, 80, 65);
  
  //ombra collo
  fill(67, 125, 180);
  triangle(xCentro + 40, yCentro-30, xCentro-40, yCentro-30, xCentro+40, yCentro+50)

  //lingua
  fill(240,125,130);
  ellipse(xLingua, yLingua,20,25);
  
  //muso bianco
  fill(250);
  ellipse(xCentro, yCentro - 30,80,70);
  
  //muso blu
  fill(67, 125, 180);
  circle(xCentro, yCentro-30, 30);

  //orecchia sx
  fill(67, 125, 180);
  triangle (xCentro - 40, yCentro-30, xCentro - 40, yCentro-110, xCentro - 70, yCentro-80);

  //orecchia dx
  fill(67, 125, 180);
  triangle(xCentro + 40, yCentro - 30, xCentro + 40, yCentro - 110, xCentro + 70, yCentro - 80);

  //occhi
  fill(67, 125, 180);
  circle(xCentro-20, yCentro-75, 12);
  circle(xCentro+20, yCentro-75, 12);
  
  //corpo
  fill(250);
  rect(xCentro, yCentro+120, 80, 180);

  //collare
  fill(240,125,130);
  rect(xCentro, yCentro+35, 80, 10);

  //muso blu
  fill(280, 220, 130);
  circle(xCentro, yCentro+47.5, 15);
  
  //ombra corpo
  fill(120, 180, 220);
  rect(xCentro, yCentro+170, 30, 70);

  //zampa sx
  fill(120, 180, 220);
  triangle (xCentro - 40, yMax, xCentro - 80, yMax, xCentro - 40, yCentro + 40);

  //zampa dx
  fill(120, 180, 220);
  triangle (xCentro + 40, yMax, xCentro + 80, yMax, xCentro + 40, yCentro + 40);
  pop();

  push();

}