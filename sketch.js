let r = 200;

let density;
let densitySlider;

let thetaMax, phiMax;
let thetaMaxSlider, phiMaxSlider;

let frequency, frequency2;
let frequencySlider, frequencySlider2;

function setup() {
  createCanvas(700, 700, WEBGL);
  angleMode(DEGREES);
  colorMode(HSB);

  stroke(0, 0, 60);
  // strokeWeight(3);
  strokeWeight(0.8);
  noFill();

  density = createDiv();
  densitySlider = createSlider(3, 62, 24, 1)
  
  phiMax = createDiv();
  phiMaxSlider = createSlider(0, 180, 180, 1)
  
  thetaMax = createDiv();
  thetaMaxSlider = createSlider(0, 360, 360, 1)

  frequency = createDiv();
  frequencySlider = createSlider(1, 10, 1, .01)

  frequency2 = createDiv();
  frequency2Slider = createSlider(1, 10, 1, .01)
}

let camera = 0;
function draw() {
  background(0, 0, 0);
  
  orbitControl(4, 4);
  
  rotateY(90);
  rotateZ(65);
  camera += 1;
  rotateY(camera/5);
  rotateZ(camera/5);

  // normalSphere();
  // sphericaleSpiral();
  // shapeL();
  bumpySphere();

  let displayDensity = int(map(densitySlider.value(), 3, 62, 1, 60))
  density.html("Density: " + displayDensity)
  phiMax.html("Phi: " + phiMaxSlider.value())
  thetaMax.html("Theta: " + thetaMaxSlider.value())
  frequency.html("Frequency 1: " + frequencySlider.value())
  frequency2.html("Frequency 2: " + frequency2Slider.value())
}

function bumpySphere() {
  for(let phi = 0; phi < phiMaxSlider.value(); phi += 2) {
    beginShape(POINTS)
    for(let theta = 0; theta < thetaMaxSlider.value(); theta += 2) {
      let x = r * (1+0.2*sin(theta*6)*sin(phi*5)) * cos(phi)
      let y = r * (1+0.2*sin(theta*6)*sin(phi*5)) * sin(phi) * sin(theta)
      let z = r * (1+0.2*sin(theta*6)*sin(phi*5)) * sin(phi) * cos(theta)
      vertex(x, y, z)
    }
    endShape()
  }  
} 

function shapeL() {
  beginShape()
  for(let theta = 0; theta < 360; theta += 0.1) {
    let x = r * cos(theta * frequencySlider.value())
    let y = r * sin(theta * frequencySlider.value()) * sin(theta * frequency2Slider.value())
    let z = r * sin(theta * frequencySlider.value()) * cos(theta * frequency2Slider.value())
    vertex(x, y, z)
  }
  endShape(LINES)
}

function sphericaleSpiral() {
  beginShape()
  for(let theta = 0; theta < thetaMaxSlider.value()/2; theta += 0.1) {
    let x = r * cos(theta)
    let y = r * sin(theta) * sin(theta * densitySlider.value())
    let z = r * sin(theta) * cos(theta * densitySlider.value())
    vertex(x, y, z)
  }
  endShape(LINES)
}

function normalSphere() {
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
} 
