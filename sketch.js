let posX = [];
let posY = [];
let dirX = [];
let dirY = [];
let h = 1;

let maxSpeed = 8;
let numParticles = 4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB, 360, 100, 100, 255);
  for (let i = 0; i < numParticles; i++ ){
    posX.push(random(0,width));
    posY.push(random(0,height));
    dirX.push(random(-maxSpeed,maxSpeed));
    dirY.push(random(-maxSpeed,maxSpeed));
  }
}

function draw() {
  background(0, 0, 0, 6);
  for (let n = 0; n < posX.length; n++){
    let partner = (n + 1) % posX.length
    stroke(h % 360, 100, 100);
    h++;
    line(posX[n], posY[n], posX[partner], posY[partner]);
  }
  for (let i = 0; i < posX.length; i++){
    posX[i] += dirX[i];
    posY[i] += dirY[i];
    if ((posX[i] <= 0) || (posX[i] >= width)){
      dirX[i] *= -1;
    }
    if ((posY[i] <= 0) || (posY[i] >= height)){
      dirY[i] *= -1;
    }

  }


}