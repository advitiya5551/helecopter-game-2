var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground, basket1, basket2, basket3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);






	packageSprite = createSprite(width / 2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale = 0.2;
	packageSprite.visable = true


	helicopterSprite = createSprite(width / 2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale = 0.6

	groundSprite = createSprite(width / 2, height - 35, width, 10);
	groundSprite.shapeColor = color(255)


	engine = Engine.create();
	world = engine.world;

	basket1 = new Basket(290, 350, 20, 100);
	basket2 = new Basket(400, 200, 200, 20);
	basket3 = new Basket(510, 350, 20, 100);

	packageBody = Bodies.circle(width / 2, 200, 5, { restitution: 1, isStatic: true });
	World.add(world, packageBody);


	//Create a Ground
	ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
	World.add(world, ground);
	if (keyPressed("space")) {

	}

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y

	ellipseMode(RADIUS);
	ellipse(packageSprite.position.x, packageSprite.position.y, 10, 10);

	packageSprite.x = packageBody.position.x
	packageSprite.y = packageBody.position.y
	drawSprites();
	

basket1.display();
basket2.display();
basket3.display();
}

function keyPressed() {
	if (keyCode === 40) {
		// Look at the hints in the document and understand how to make the package body fall only on

		Matter.Body.setStatic(packageBody, false)


	}
}



