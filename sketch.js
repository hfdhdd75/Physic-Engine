const Engine = Matter.Engine;
const World = Matter.World;
const Bodies  =  Matter.Bodies;

var ball

var engine,world,object;
function setup() {
  createCanvas(400,400);

engine  = Engine.create();
world = engine.world;


var ground_options={
isStatic : true
}
var ball_options = {
  restitution : 1.0
}

ground = Bodies.rectangle(200,390,400,20,ground_options);
World.add(world,ground);

ball = Bodies.circle(200, 50, 20, ball_options)
World.add(world,ball)

 
}

function draw() {
  background(0);  

Engine.update(engine);
rectMode(CENTER)
fill("brown")
rect(ground.position.x,ground.position.y,400,20);

ellipseMode(RADIUS)
fill("white")
ellipse(ball.position.x, ball.position.y,20, 20)

  
  
}