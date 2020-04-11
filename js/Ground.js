class Ground {
  constructor(x, y, width, height) {
    var options ={
      isStatic : true
    }
    this.body= Bodies.rectangle(x,y,width,height,options);
    World.add(world,this.body);
  };

  display(){
    push();
    //stroke("dark blue");
    fill("#00063B");
    
    rectMode(CENTER);
    rect(this.body.position.x,390,800,20);
    pop();

  }
}
