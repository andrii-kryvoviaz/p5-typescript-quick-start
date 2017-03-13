var meter;

function setup() {
  createCanvas(windowWidth, windowHeight);
  meter = new FPSmeter();
}

function draw() {
  background(51);
  meter.tick();
}
