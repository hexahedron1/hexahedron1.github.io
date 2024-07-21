char[] starClasses = new char[] {
  'O', 'B', 'A', 'F', 'G', 'K', 'M'
};
float starMass;
char starClass;
color starColor;
float starRadius;
float scale = 10;
int lightRes = 200;
boolean drawLight = true;
boolean drawShadows = true;
int messageTime = -2147483647;
String message = "";
boolean paused = false;
float time = 0.000001;
float timeSpeed = 128;
float planetRadius;
color bg = #020103;
Planet[] planets;
color planetColor = #CCCCCC;
void setup() {
  size(1024, 1024, P2D);
  textSize(17);
  textAlign(LEFT, TOP);
  generate();
}
void draw() {
  background(bg);
  if (drawLight) {
    for (int i = lightRes; i >= 0; i--) {
      color c = lerpColor(starColor, bg, 0.5+(i*(0.5/lightRes)));
      noStroke();
      fill(c);
      circle(width/2, height/2, starRadius * scale * pow(i/(lightRes*0.1), 2) * 1.1);
    }
  }
  fill(drawLight ? lerpColor(starColor, 0xFFFFFFFF, 0.91) : starColor);
  circle(width/2, height/2, starRadius * scale);
  if (keyPressed) { 
    if (keyCode == UP) {
      starMass = min(max(starMass + 100, 2300), 33000);
      star();
    } else if (keyCode == DOWN) {
      starMass = min(max(starMass - 100, 2300), 33000);
      star();
    }
  }
  for (int i = planets.length - 1; i >= 0; i--) {
    Planet p = planets[i];
    stroke(bg);
    strokeWeight(p.Radius*scale/2);
    float x = sin(time / (p.Orbit/2)) * p.Orbit;
    float y = cos(time / (p.Orbit/2)) * p.Orbit;
    if (drawShadows) {
      float linex = x * (max(width, height) / p.Orbit) + width/2;
      float liney = y * (max(width, height) / p.Orbit) + height/2;
      x += width/2;
      y += height/2;
      line(x, y, linex, liney);
    } else {
      x += width/2;
      y += height/2;  
    }
    noStroke();
    fill(lerpColor(lerpColor(starColor, planetColor, 0.6), #000000, min(norm(p.Orbit, starRadius * scale, starMass/PI), 1)));
    //displayMessage(x + ", " + y);
    circle(x, y, p.Radius * scale/2);
    if (drawShadows) {
      fill(0);
      float angle = atan2(height/2 - y, width/2 - x);
      arc(x, y, p.Radius*scale/2, p.Radius*scale/2, angle+HALF_PI, angle+PI+HALF_PI, CHORD);
    }
    //println("Planet " + (i + 1) + ": radius:" + planets[i].Radius + ", orbit: " + planets[i].Orbit);
  }
  fill(starColor);
  if (millis() - messageTime < 2000) {
    text(message, 5, 5);
  }
  if (paused) {
    rect(width - 10, 5, 5, 20);
    rect(width - 20, 5, 5, 20);
  }
  if (!paused)
    time += timeSpeed/1000;
}
void generate() {
  starMass = random(2300, 33000);
  star();
  planets = new Planet[ceil(random(0, 9))];
  for (int i = 0; i < planets.length; i++) {
    planets[i] = new Planet(starRadius*scale + 1 + (i * random(0.9, 1.1)) * pow(scale, 2), random(0.2, 3));
    println("Planet " + (i + 1) + ": radius:" + planets[i].Radius + ", orbit: " + planets[i].Orbit);
  }
  time = random(1, 99999);
 // planetRadius = random(0.2, 3);
} 
void star() {
  starColor = massToColor(starMass);
  starRadius = map(starMass, 2300, 33000, 0.7, 6.6);
  starClass = starClasses[round(map(starMass, 33000, 2300, 0, 6))];
  //println(starRadius);
  displayMessage("Star type: " + starClass + "; Mass: " + starMass + "; Radius: " + starRadius);
}
void mouseClicked() {
  generate();
}
color massToColor(float mass) {
  return lerpColor(#FACB68, #9FB1FF, (mass - 2300)/30700);
}
void mouseWheel(MouseEvent event) {
  float e = -event.getCount();
  lightRes = floor(max(lightRes + e, 1));
  displayMessage("Light resolution: " + lightRes);
  //println(e);
}
void keyPressed() {
  if (key == ' ') {
    paused = !paused;
    displayMessage(paused ? "Paused" : "Unpaused");
  } else if (keyCode == LEFT) {
    if (timeSpeed > 0)
      timeSpeed /= 2;
    else
      timeSpeed *= 2;
    if (timeSpeed < 1 && timeSpeed > 0)
      timeSpeed = -1;
    displayMessage("Time speed: " + timeSpeed);
  } else if (keyCode == RIGHT) {
    if (timeSpeed > 0)
      timeSpeed *= 2;
    else
      timeSpeed /= 2;
    if (timeSpeed > -1 && timeSpeed < 0)
      timeSpeed = 1;
    displayMessage("Time speed: " + timeSpeed);
  } else if (Character.toLowerCase(key) == 'l') {
    drawLight = !drawLight;
    displayMessage("Light " + (drawLight ? "on" : "off"));
  } else if (Character.toLowerCase(key) == 's') {
    drawShadows = !drawShadows;
    displayMessage("Shadows " + (drawShadows ? "on" : "off"));
  }
}
void displayMessage(String msg) {
  message = msg;
  messageTime = millis();
}

class Planet {
  Planet(float orbit, float radius) {
    Orbit = orbit;
    Radius = radius;
  }
  float Orbit;
  float Radius;
}
