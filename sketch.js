// module aliases
var Engine = Matter.Engine,
  //Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;
var engine;
var world;
var boxes = [];
var ground;
var boderLeft;
var boderRight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  var options={
    isStatic:true,
    friction:1,
  }
  ground = Bodies.rectangle(width/2 ,height,width,50,options);
  boderRight = Bodies.rectangle(width,height/2,50,height,options);
  boderLeft = Bodies.rectangle(0 ,height/2,50,height,options);
  World.add(world, [ground,boderLeft,boderRight]);
}

function mousePressed(){
  boxes.push(new Box(mouseX,mouseY,random(10,50),random(50,10)));
  boxes[boxes.length-1].col = random(255);

}


function draw() {
  background(220,123,128);
  for(i=0;i<boxes.length;i++){boxes[i].show()}
  fill(170);
  rectMode(CENTER);
  rect(width/2 ,height,width,50)

}
