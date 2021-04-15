var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("white")


	engine = Engine.create();
	world = engine.world;

	var packagebody_options ={
	
		restitution:0,
		isStatic:true
   }
   packageBody = Bodies.rectangle(width/2 , 200, 5 ,5,packagebody_options);
   World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 rect1 = new Box(400,650,200,20);
	 rect1.shapeColor = 'red'
	 rect2 = new Box(310,610,20,100);
	 rect2.shapeColor = 'red'
	 rect3 = new Box(490,610,20,100);
	 rect3.shapeColor = 'red'


	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 
 packageSprite.x=packageBody.position.x
 packageSprite.y=packageBody.position.y

 rect1.display();
 rect2.display();
 rect3.display();

 keyPressed();
  drawSprites();

 
}

function keyPressed() {
	if (keyCode === DOWN_ARROW) {
   
	 Matter.Body.setStatic(packageBody,false); 
	 
	 var packagebody_options ={
       restitution:0
		
    }
	
	 }
   }

