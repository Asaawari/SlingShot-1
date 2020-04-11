const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, corona1;
var backgroundImg,platform;
var sanitizer, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/hos.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    corona1 = new Corona(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    corona2 = new Corona(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    sanitizer = new Sanitizer(100,100);
    slingshot = new SlingShot(sanitizer.body,{x:200, y:100});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    corona1.display();
    log1.display();

    box3.display();
    box4.display();
    corona2.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    sanitizer.display();
    platform.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(sanitizer.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}