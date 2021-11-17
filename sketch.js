//array to store particle objects
let particles = [];

//constants for particle speed and number of particles
const speedLimit = 8;
const numParticles = 4;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  colorMode(HSB, 360, 100, 100, 255);
  //add number of particles determined by const to particle array
  for (let i = 0; i < numParticles; i++ ){
    let newParticle = new Walker(random(0,width), random(0,height), speedLimit);
    particles.push(newParticle);
  }
}

function draw() {
  background(0, 0, 0, 6);
  //loop to draw lines between particles
  for (let n = 0; n < particles.length; n++){
    let partner;
    if (n + 1 < particles.length){
      partner = n + 1;
    }
    else {
      partner = 0;
    }
    //display lines
    particles[n].display(particles[partner].x, particles[partner].y);
  }
  //loop to update positions
  for (let i = 0; i < particles.length; i++){
    particles[i].update();
  }
}