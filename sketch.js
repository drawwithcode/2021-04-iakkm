let myFont;
let x = 0;

function preload() {
  myFont = loadFont("./assets/font/Sporting_Grotesque-Regular_web.otf");

  bg = loadImage("assets/bg.png");

  bitcoin = loadImage("assets/Bitcoin.png");

  litecoin = loadImage("assets/Litecoin.png");

  ethereum = loadImage("assets/Ethereum.png");

  shibainu = loadImage("assets/Shiba.png");

  polkadot = loadImage("assets/Polkadot.png");

  pancakeswap = loadImage("assets/Pancakeswap.png");

  solana = loadImage("assets/Solana.png");

  cardano = loadImage("assets/Cardano.png");

  dogecoin = loadImage("assets/Dogecoin.png");

  cosmos = loadImage("assets/Cosmos.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  speed = 1.5;

  x1 = random(width);
  y1 = random(height);
  xDir1 = -1;
  yDir1 = 1;

  x2 = random(width);
  y2 = random(height);
  xDir2 = 1;
  yDir2 = -1;

  x3 = random(width);
  y3 = random(height);
  xDir3 = -1;
  yDir3 = -1;

  x4 = random(width);
  y4 = random(height);
  xDir4 = 1;
  yDir4 = 1;

  x5 = random(width);
  y5 = random(height);
  xDir5 = -1;
  yDir5 = 1;

  x6 = random(width);
  y6 = random(height);
  xDir6 = 1;
  yDir6 = -1;

  x7 = random(width);
  y7 = random(height);
  xDir7 = -1;
  yDir7 = -1;

  x8 = random(width);
  y8 = random(height);
  xDir8 = 1;
  yDir8 = 1;

  x9 = random(width);
  y9 = random(height);
  xDir9 = -1;
  yDir9 = 1;

  x10 = random(width);
  y10 = random(height);
  xDir10 = 1;
  yDir10 = 1;

  button1 = createElement("button", "BITCOIN");
  button2 = createElement("button", "LITECOIN");
  button3 = createElement("button", "ETHEREUM");
  button4 = createElement("button", "SHIBA INU");
  button5 = createElement("button", "POLKADOT");
  button6 = createElement("button", "PANCAKE SWAP");
  button7 = createElement("button", "SOLANA");
  button8 = createElement("button", "CARDANO");
  button9 = createElement("button", "DOGECOIN");
  button10 = createElement("button", "COSMOS");
}

function draw() {
  background(0, 0, 0);

  push();
  imageMode(CENTER);
  translate(width / 2, height / 2);
  image(bg, 0, 0);
  pop();

  fill(255);
  textFont(myFont);
  textSize(windowWidth / 85, windowHeight / 85);
  text(
    "A cryptocurrency (or “crypto”) is a digital currency that can be used to buy goods and services, but uses an online ledger with strong cryptography to secure online transactions",
    x,
    windowHeight - 15
  );

  if (x < -1800) {
    x = windowWidth;
  }
  x--;

  fill(255);
  textFont(myFont);
  textSize(windowWidth / 85, windowHeight / 85);
  text(
    "A cryptocurrency (or “crypto”) is a digital currency that can be used to buy goods and services, but uses an online ledger with strong cryptography to secure online transactions",
    x,
    windowHeight - 1065
  );

  if (x < -1800) {
    x = windowWidth;
  }
  x--;

  // rect(x,y,10,10)
  button1.position(x1, y1);
  button2.position(x2, y2);
  button3.position(x3, y3);
  button4.position(x4, y4);
  button5.position(x5, y5);
  button6.position(x6, y6);
  button7.position(x7, y7);
  button8.position(x8, y8);
  button9.position(x9, y9);
  button10.position(x10, y10);

  x1 += speed * xDir1;
  y1 += speed * yDir1;
  if (x1 >= width || x1 <= 0) {
    xDir1 *= -1;
  }
  if (y1 >= height || y1 <= 0) {
    yDir1 *= -1;
  }

  x2 += speed * xDir2;
  y2 += speed * yDir2;
  if (x2 >= width || x2 <= 0) {
    xDir2 *= -1;
  }
  if (y2 >= height || y2 <= 0) {
    yDir2 *= -1;
  }

  x3 += speed * xDir3;
  y3 += speed * yDir3;
  if (x3 >= width || x3 <= 0) {
    xDir3 *= -1;
  }
  if (y3 >= height || y3 <= 0) {
    yDir3 *= -1;
  }

  x4 += speed * xDir4;
  y4 += speed * yDir4;
  if (x4 >= width || x4 <= 0) {
    xDir4 *= -1;
  }
  if (y4 >= height || y4 <= 0) {
    yDir4 *= -1;
  }

  x5 += speed * xDir5;
  y5 += speed * yDir5;
  if (x5 >= width || x5 <= 0) {
    xDir5 *= -1;
  }
  if (y5 >= height || y5 <= 0) {
    yDir5 *= -1;
  }

  x6 += speed * xDir6;
  y6 += speed * yDir6;
  if (x6 >= width || x6 <= 0) {
    xDir6 *= -1;
  }
  if (y6 >= height || y6 <= 0) {
    yDir6 *= -1;
  }

  x7 += speed * xDir7;
  y7 += speed * yDir7;
  if (x7 >= width || x7 <= 0) {
    xDir7 *= -1;
  }
  if (y7 >= height || y7 <= 0) {
    yDir7 *= -1;
  }

  x8 += speed * xDir8;
  y8 += speed * yDir8;
  if (x8 >= width || x8 <= 0) {
    xDir8 *= -1;
  }
  if (y8 >= height || y8 <= 0) {
    yDir8 *= -1;
  }

  x9 += speed * xDir9;
  y9 += speed * yDir9;
  if (x9 >= width || x9 <= 0) {
    xDir9 *= -1;
  }
  if (y9 >= height || y9 <= 0) {
    yDir9 *= -1;
  }

  x10 += speed * xDir10;
  y10 += speed * yDir10;
  if (x10 >= width || x10 <= 0) {
    xDir10 *= -1;
  }
  if (y10 >= height || y10 <= 0) {
    yDir10 *= -1;
  }

  button1.mouseOver(noLoop);
  button1.mousePressed(display1);
  button1.mouseOut(loop);

  button2.mouseOver(noLoop);
  button2.mousePressed(display2);
  button2.mouseOut(loop);

  button3.mouseOver(noLoop);
  button3.mousePressed(display3);
  button3.mouseOut(loop);

  button4.mouseOver(noLoop);
  button4.mousePressed(display4);
  button4.mouseOut(loop);

  button5.mouseOver(noLoop);
  button5.mousePressed(display5);
  button5.mouseOut(loop);

  button6.mouseOver(noLoop);
  button6.mousePressed(display6);
  button6.mouseOut(loop);

  button7.mouseOver(noLoop);
  button7.mousePressed(display7);
  button7.mouseOut(loop);

  button8.mouseOver(noLoop);
  button8.mousePressed(display8);
  button8.mouseOut(loop);

  button9.mouseOver(noLoop);
  button9.mousePressed(display9);
  button9.mouseOut(loop);

  button10.mouseOver(noLoop);
  button10.mousePressed(display10);
  button10.mouseOut(loop);
}

function display1() {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(bitcoin, 0, 0);
  pop();
}

function display2() {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(litecoin, 0, 0);
  pop();
}

function display3() {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(ethereum, 0, 0);
  pop();
}

function display4() {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(shibainu, 0, 0);
  pop();
}

function display5() {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(polkadot, 0, 0);
  pop();
}

function display6() {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(pancakeswap, 0, 0);
  pop();
}

function display7() {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(solana, 0, 0);
  pop();
}

function display8() {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(cardano, 0, 0);
  pop();
}

function display9() {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(dogecoin, 0, 0);
  pop();
}

function display10() {
  push();
  translate(width / 2, height / 2);
  imageMode(CENTER);
  image(cosmos, 0, 0);
  pop();
}
