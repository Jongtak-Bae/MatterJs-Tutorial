function Circle(x, y, r) {

  var options={
    friction:1,
    restitution:0.4,

  }
  this.body = Bodies.circle(x,y,r,options);
  this.r = r;
  this.body.friction = 0;
  World.add(world, this.body);
  this.show = function(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);//make the box ratatable
    rectMode(CENTER);
    strokeWeight(1);
    stroke(0);
    fill(this.col,123,78);
    ellipse(0, 0, this.r * 2);
    pop();
  }
}
