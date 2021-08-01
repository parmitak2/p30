const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, sling, ball;
var stand1, stand2;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15;
var py1, py2, py3, py4, py5;

function setup() {
  createCanvas(1300, 400);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(730, 390, 1500, 20);
  box1 = new Box(400, 230, 50, 50);
  box2 = new Box(450, 230, 50, 50);
  box3 = new Box(500, 230, 50, 50);
  box4 = new Box(550, 230, 50, 50);
  box5 = new Box(600, 230, 50, 50);
  box6 = new Box(425, 180, 50, 50);
  box7 = new Box(475, 180, 50, 50);
  box8 = new Box(525, 180, 50, 50);
  box9 = new Box(575, 180, 50, 50);
  box10 = new Box(450, 130, 50, 50);
  box11 = new Box(500, 130, 50, 50);
  box12 = new Box(550, 130, 50, 50);
  box13 = new Box(475, 80, 50, 50);
  box14 = new Box(525, 80, 50, 50);
  box15 = new Box(500, 30, 50, 50);
  py1 = new Box(845, 150, 50, 50);
  py2 = new Box(895, 150, 50, 50);
  py3 = new Box(945, 150, 50, 50);
  py4 = new Box(870, 100, 50, 50);
  py5 = new Box(920, 100, 50, 50);
  py6 = new Box(895, 50, 50, 50);
  ball = new Polygon(100, 100, 30);
  stand1 = new Ground(500, 270, 300, 10);
  stand2 = new Ground(900, 200, 300, 10);
  sling = new Sling(ball.body, { x: 200, y: 250 })
}

function draw() {
  background(56,44,44);
  Engine.update(engine);
  rectMode(CENTER);
  ground.display();
 box1.display("red", "black");
  box2.display("red", "black");
  box3.display("red", "black");
  box4.display("red", "black");
  box5.display("red", "black");
  box6.display("indigo", "black");
  box7.display("indigo", "black");
  box8.display("indigo", "black");
  box9.display("indigo", "black");
  box10.display("green", "black");
  box11.display("green", "black");
  box12.display("green", "black");
  box13.display("orange", "black");
  box14.display("orange", "black");
  box15.display("saffron", "black");
  //py1.display(rgb(229, 116, 117), "black")
  //py2.display(rgb(229, 116, 117), "black")
  //py3.display(rgb(229, 116, 117), "black")
  //py4.display(rgb(110, 71, 102), "black")
  //py5.display(rgb(110, 71, 102), "black")
  //py6.display("babypink", "black")
  sling.display("black");
  stand1.display();
  //stand2.display();
  ball.display("yellow","black");
 

}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY })
}


function mouseReleased() {
  sling.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    sling.attach(ball.body);
  }
}