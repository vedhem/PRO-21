
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
	ground = new Ground(400, 650, 800, 20);
	leftWall = new Ground(500, 615, 10, 50);
	rightWall = new Ground(600, 615, 10, 50);

    button = createImg("button.png");
    button.position(350, 90);
    button.size(130, 130);
    button.mouseClicked(pressForce);

	var ball_options = {
		restitution: 0.95,
		isStatic: false,
		friction: 0,
		density: 1.2
	}

	ball = Bodies.circle(200, 200, 10, ball_options);
    World.add(world, ball);
    Engine.run(engine);
  
}

function keyPressed() {
	if (keyCode === SPACE) {
		hforce();
		vforce();
	}
}

function pressForce() {
	Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.9, y:-0.3});
}

function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(51);
  ellipse(ball.position.x, ball.position.y, 10);
  ground.show();
  leftWall.show();
  rightWall.show();
  
  drawSprites();
 
}



