let r = 200;

function setup() {
  createCanvas(700, 700, WEBGL);
  angleMode(DEGREES);
  colorMode(HSB);

  stroke(0, 0, 100);
  strokeWeight(3);
  noFill();
}

function draw() {
  background(0, 0, 15);
  orbitControl(4, 4);

  for(let phi = 0; phi < 180; phi += 5) {
    for(let theta = 0; theta < 360; theta += 5) {
      let x = r * cos(phi)
      let y = r * sin(phi) * sin(theta)
      let z = r * sin(phi) * cos(theta)
      point(x, y, z)
    }
  }
}
