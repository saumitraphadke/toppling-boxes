const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var Pig;
var Log;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(100,380,50,50);
    box2 = new Box(200,380,50,50);
    ground = new Ground(200,height,400,20)
    Pig = new pig(150, 380, 40, 30);
    Log = new log(150, 310, 150, 20, PI);
    box3 = new Box(100, 290, 50, 50);
    box4 = new Box(200, 290, 50, 50);
    Pig1 = new pig(150, 290, 40, 30);
    Log1 = new log(150, 250, 150, 20, PI);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    Pig.display();
    Log.display();
    box3.display();
    box4.display();
    Pig1.display();
    Log1.display();
}