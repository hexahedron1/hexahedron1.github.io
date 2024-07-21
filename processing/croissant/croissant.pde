int scrSize = 700;
int time = 0;
void setup() {
  size(700, 700, P3D);
  textFont(createFont("consolas.ttf", 10));
}
void draw() {
  background(0);
  int seconds = millis() / 1000;
  text("You have been observing the croissant for " + (seconds / 3600) % 60 + " hours, " + (seconds / 60) % 60 + " minutes and " + seconds % 60 + " seconds", 6, 15);
  text("The croissant is displayed at " + Math.round(frameRate) + " fps", 6, 30);
  text("Press S to screenshot.", 6, 45);
  fill(255, 172, 51);
  stroke(244, 144, 12);
  translate(scrSize / 2, scrSize / 2, 0);
  rotateY(radians(time/4));
  rotateX(radians(time*2));
  rotateZ(radians(time));
  box(30);
  box(20, 20, 50);
  box(10, 10, 60);
  time++;
}

void keyPressed() {
  if (key == 's')
    saveFrame("croissant_frame_###.png");
}
