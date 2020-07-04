
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObj, paperObject,groundObject	
var world;


function preload()
{
	
}

function setup() {
	createCanvas(1300,450);
	rectMode(CENTER);



	engine = Engine.create();
	world = engine.world;
	ground = new ground(600,height,1400,20)


	//Create the Bodies Here.

	box1=createSprite(431,652,120,15);
	box1.shapeColor=color(400)
	box2=createSprite(500,600,15,120);
	box2.shapeColor=color(400)
	box3=createSprite(362,600,15,120);
	box3.shapeColor=color(400)

	var Render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });
  
	  Engine.run(engine);
	  //Render.run(render);
	
  }
  
  
  function draw() {
	rectMode(CENTER);
	background(0);
   
	box1.display();
	box2.display();
	box3.display();
	
   
	
	
   
  }
  
  function keyPressed() {
		if (keyCode === UP_ARROW) {
  
		  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	  
		}
  }
  
  
  
  
  
  