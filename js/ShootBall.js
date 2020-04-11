class ShootBall {
    constructor(x, y) {
      var options = {
        "density" :   0.5,
        "friction" : 1.0,
        "restitution" : 1,
        "frictionAir":0.06
      }
      this.body=Bodies.rectangle(x,y,10,10,options);
      this.color=color;
      World.add(world,this.body);
    };
  
    display(){
     //fill(this.color);
      circle(this.body.position.x,this.body.position.y,30,30);
  
    };
  };