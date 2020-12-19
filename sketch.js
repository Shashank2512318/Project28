const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var Ground1;
var boy;
var rope1;
var stone1;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11;
var tree1;

function preload(){
    boyImage= loadImage("sprites/boy.png");
    tree1Image= loadImage("sprites/tree.png") 
}

function setup() {
	createCanvas(800, 700);

  engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	boy1= createSprite(200, 637, 30, 30);
	boy1.addImage(boyImage);
  boy1.scale= 0.1;

    mango1= new mango(620, 150, 50);
    mango2= new mango(500, 350, 50);
    mango3= new mango(575, 350, 50);
    mango4= new mango(660, 350, 50);
    mango5= new mango(730, 350, 50);
    mango6= new mango(730, 270, 50);
    mango7= new mango(660, 270, 50);
    mango8= new mango(575, 270, 50);
    mango9= new mango(490, 270, 50);
    mango10= new mango(660, 200, 50);
    mango11= new mango(575, 200, 50);

    tree1= createSprite(600, 400, 10, 10);
    tree1.addImage(tree1Image);
    tree1.scale= 0.45;
    tree1.depth= mango1.depth-1;


    Ground1= new Ground(400, 690, 800, 20);

    stone1= new stone(150, 600);

    rope1= new link(stone1.body, {x: 150, y: 575});
    
    

    //tree1= new mangotree(600, 400);

    

	//Create the Bodies Here.


	
  
}


function draw() {
  rectMode(CENTER);
  background(255, 0, 0);


  
  drawSprites();
  stone1.display();
  Ground1.display();
  stone1.display();
  rope1.display();
  //tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();


  touch(stone1, mango1);
  touch(stone1, mango2);
  touch(stone1, mango3);
  touch(stone1, mango4);
  touch(stone1, mango5);
  touch(stone1, mango6);
  touch(stone1, mango7);
  touch(stone1, mango8);
  touch(stone1, mango9);
  touch(stone1, mango10);
  touch(stone1, mango11);

  
if(keyDown("space")) {
Matter.Body.setPosition(stone1.body, {x:150, y:600});
rope1.attach(stone1.body);

}
  
 
}

function mouseDragged () {
    
  
    Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY});
  
  
  }
  
  function mouseReleased () {
    rope1.fly();
  
  
  
  }


  function touch(stone, mango) {

    var distance=dist(stone.body.position.x, stone.body.position.y, mango.body.position.x, mango.body.position.y)
    if(distance<mango.r+stone.r) {
     
     Matter.Body.setStatic(mango.body, false);

    }


  }