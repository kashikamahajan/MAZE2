class CanonBall {
  constructor(x, y,color) {
    var options = {
      "density" :   0.5,
      "friction" : 0.1,
      "restitution" : 0.5,
      "frictionAir":0.03
    }
    this.body=Bodies.rectangle(x,y,25,50,options);
    this.color=color;
    World.add(world,this.body);
  };

  display(){
   fill(this.color);
    rect(this.body.position.x,this.body.position.y,25,50);

  };
};
