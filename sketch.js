
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{}


function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new ground(width/2,height/4,width/7,20);
	bobdiameter = 40;
	startbobpositionX = width/2;
	startbobpositionY = height/4+500;
	
	b1 = new paper(startbobpositionX-bobdiameter*2,startbobpositionY,bobdiameter);

	b2 = new paper(startbobpositionX-bobdiameter,startbobpositionY,bobdiameter);

	b3 = new paper(startbobpositionX,startbobpositionY,bobdiameter);

	b5 = new paper(startbobpositionX+bobdiameter*2,startbobpositionY,bobdiameter);

	b4 = new paper(startbobpositionX+bobdiameter,startbobpositionY,bobdiameter);

	r1 = new Chain(b1.body,roof.body,-bobdiameter*2,0);
	r2 = new Chain(b2.body,roof.body,-bobdiameter*1,0);
	r3 = new Chain(b3.body,roof.body,0,0);
	r4 = new Chain(b4.body,roof.body,bobdiameter*1,0);
	r5 = new Chain(b5.body,roof.body,bobdiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  roof.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  r1.display();
  r2.display();
  r3.display();
  r4.display();
  r5.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-45});
	}
}



