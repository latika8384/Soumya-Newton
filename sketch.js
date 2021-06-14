
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Roof
	roof = new Roof(360,200,140,20);

	//Rope to connect bob and roof.
	rope = new Rope(bodyA.body, bobyB.body);

	//creating Bobs
	var bob1 = new Bob(380,400,20);
	var bob2 = new Bob(400,400,20);
	var bob3 = new Bob(420,400,20);
	var bob4 = new Bob(440,400,20);
    var bob5 = new Bob(460,400,20);
	
	//making Ropes
	var rope1 = new Rope(bob1.body, rope1.body, -bobDiameter*2, 0);
	var rope2 = new Rope(bob2.body, rope2.body, -bobDiameter*2, 0);
	var rope3 = new Rope(bob3.body, rope3.body, -bobDiameter*2, 0);
	var rope4 = new Rope(bob4.body, rope4.body, -bobDiameter*2, 0);
	var rope5 = new Rope(bob5.body, rope5.body, -bobDiameter*2, 0); 
    
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
}

function keyPressed() {
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(bob1.body,);
	}
}

