// module aliases
var Engine = Matter.Engine,
  //Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;
var engine,world;
var circles = [];
var boundaries = [];
var boderLeft;
var boderRight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //Set up engine and world
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
//Create boundaries
boundaries.push(new Boundary(150, 300, width*0.5, 50, 0.1));
boundaries.push(new Boundary(550, 400, width*0.5, 50, -0.1));
}

function mousePressed() {
  circles.push(new Circle(mouseX, mouseY, random(20, 30)));
  circles[circles.length - 1].col = random(255);
}

function draw() {
  background(220, 123, 128);
  for (i = 0; i < circles.length; i++) {
    circles[i].show()
  }
  for(i=0;i<boundaries.length;i++){
  boundaries[i].show();
  }

}
