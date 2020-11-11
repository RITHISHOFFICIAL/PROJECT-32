class polygon{
    constructor(x, y,r) {
        var options = {
             isStatic:false,
            'restitution':0.004,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,r, options);
        this.r=r;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(RADIUS);
        fill("red");
        ellipse(0,0,this.r,this.r);
        pop();
      }
}