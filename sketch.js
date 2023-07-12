let r = 200;
let density;
let densitySlider;

let thetaMax, phiMax;
let thetaMaxSlider, phiMaxSlider;

function setup() {
  createCanvas(700, 700, WEBGL);
  angleMode(DEGREES);
  colorMode(HSB);

  stroke(0, 0, 60);
  strokeWeight(3);
  noFill();

  density = createDiv();
  densitySlider = createSlider(3, 62, 24, 1)
  
  phiMax = createDiv();
  phiMaxSlider = createSlider(0, 180, 180, 1)
  
  thetaMax = createDiv();
  thetaMaxSlider = createSlider(0, 360, 360, 1)
}

function draw() {
  background(0, 0, 15);
  orbitControl(4, 4);

  rotateY(90);
  rotateZ(65);

  for(let phi = 0; phi < phiMaxSlider.value(); phi += 180/densitySlider.value()) {
    beginShape()
    for(let theta = 0; theta < thetaMaxSlider.value(); theta += 360/densitySlider.value()) {
      let x = r * cos(phi)
      let y = r * sin(phi) * sin(theta)
      let z = r * sin(phi) * cos(theta)
      vertex(x, y, z)
    }
    endShape(CLOSE)
  }

  let displayDensity = int(map(densitySlider.value(), 3, 62, 1, 60))
  density.html("Density: " + displayDensity)
  phiMax.html("Phi: " + phiMaxSlider.value())
  thetaMax.html("Theta: " + thetaMaxSlider.value())
}
