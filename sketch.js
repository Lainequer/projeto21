var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var left;
var right;

function setup() {
	createCanvas(900, 900);
   engine = Engine.create();
   world = engine.world;
   
   ground =new Ground(300,890,900,10);
   left =new Ground(490,300,20,20);
   right = new Ground(510,300,20,20)

   var ball_options={
   isStatic : false,
   restitution:0.3,
   friction :0,
   density:1.2
   };
	 ball = Bodies.circle(200,100,20,ball_options);
   World.add(world,ball);
 
	rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() {
  
  background(51);
  
  ellipse(ball.position.x,ball.position.y,20);
  
  ground.show();
  left.show();
  right.show();

  drawSprites();
  Engine.update(engine);
}

function keyPressed(){
    if(keyCode === UP_ARROW){

      Matter.Body.applyForce(ball,{x:0,y:0},{x:0.5,y:0});
    }
}

