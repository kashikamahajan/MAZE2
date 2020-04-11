// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var ground;
var tanker;
var bg;
var shoot_balls;
var cb;
var p1=[];


function preload()
{
bg=loadImage("bg.jpg");
}


function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    createCanvas(800,400);
    engine=Engine.create();
    world=engine.world;
    Engine.run(engine);



   
  ground=new Ground(400,390,800,50);
  tanker=new Tanker(100,300,100,100);
  shoot_balls=new ShootBall(100,250);
  slingshot = new SlingShot(shoot_balls.body,{x:130, y:250});

  var x=400;
  for(var i=1;i<=5;i++)
  {
      
    p1.push(new CanonBall(x,350,"#4267A6"));
    x+=25;
    
  }
  var x2=412.5;
  for(var i=1;i<=4;i++)
  {
      
    p1.push(new CanonBall(x2,300,"#5670AB"));
    x2+=25;
    
  }
  var x3=425;
  for(var i=1;i<=3;i++)
  {
    p1.push(new CanonBall(x3,250,"#71649C"));
    x3+=25;
  
}
var x4=437;
  for(var i=1;i<=2;i++)
  {
    p1.push(new CanonBall(x4,200,"#776C92"));
    x4+=25;
  
}

    p1.push(new CanonBall(450,150,"#AB9FB5"));
}
   

function draw() {
// Remember to update the Matter Engine and set the background.
background(bg);
Engine.update(engine);


push();
    //stroke("dark blue");
    fill("#00063B");    
    rectMode(CENTER);
    rect(100,390,100,80);
pop();

ground.display();

shoot_balls.display();
tanker.display();
//slingshot.display(); 



for (var i = 0; i < p1.length; i++) {
    p1[i].display();
}
}

function mouseDragged(){
  //if (gameState!=="launched"){

      Matter.Body.setPosition(shoot_balls.body, {x: mouseX , y: mouseY});
  //}
}

function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}






