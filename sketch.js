const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var pig1;
var pig2;
var log1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,height,400,20)
    

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    pig1 = new Pig(810,350);
    log1 = new Log(810,260,300,PI/2);
    pig2 = new Pig(810,220);
}  

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
     pig1.display();
     pig2.display();
     log1.display();
    ground.display();
   
}