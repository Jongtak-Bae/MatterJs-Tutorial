function Boundary(x, y, w, h, a) {

  var options = {
    friction: 1,
    restitution: 0.8,
    isStatic: true,
    angle: a
  }
  this.body = Bodies.rectangle(x, y, w, h, options);
  this.w = w;
  this.h = h;
  this.body.friction = 0;
  World.add(world, this.body);
  this.show = function() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle); //make the box ratatable
    rectMode(CENTER);
    strokeWeight(1);
    stroke(0);
    fill(120);
    rect(0, 0, this.w, this.h);
    pop();
  }
}