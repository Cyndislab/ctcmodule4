function setup() {
  createCanvas(windowWidth, windowHeight);
  stroke(0, 0, 255);
  noFill();
  frameRate(20);

  background(255);
  translate(30, 30);
}

function draw() {
  background(255);
  translate(30, 30);
  for (var x = 0; x < width - 30; x += 230) {
    for (var y = 0; y < height - 30; y += 230) {
      for (let i = 0; i < 9; i++) {
        triangle(
          random(-60 + x, 60 + x),
          random(-60 + y, 60 + y),
          random(375 + x, 460 + x),
          random(358 + y, 130 + y),
          random(-20 + x, 120 + x),
          random(186 + y, 250 + y)
        );
      }
    }
  }
}
