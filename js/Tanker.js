class Tanker {
  constructor(x, y, width, height,) {
      var options = {
      isStatic: true
     }
     this.body=Bodies.rectangle(x,y,width,height);
     this.width=width;
     this.height=height;
     
     
     

     this.image = loadImage("tanker.png");
     //World.add(world, this.body);
    };

    display(){
      // Draw the tanker the way you like.
      // You could also use an image if you want a specific look
      
      //var angle = PI*4;
      
      
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(PI*4);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

    };
}
