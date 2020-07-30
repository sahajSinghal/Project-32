const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;
var stand1, stand2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
var black11, block12, block13, block14, block15, block16, block17, block18, block19;
var striker;
var rope;
var score = 0;
var col;
var state;

function setup() {
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    stand1 = new Ground(445,350,240,20);
    stand2 = new Ground(745,200,300,20);

    block1 = new Box(355,320,60,60);
    block2 = new Box(415,320,60,60);
    block3 = new Box(475,320,60,60);
    block4 = new Box(535,320,60,60);

    block5 = new Box(385,290,60,60);
    block6 = new Box(445,290,60,60);
    block7 = new Box(505,290,60,60);

    block8 = new Box(415,260,60,60);
    block9 = new Box(475,260,60,60);

    block10 = new Box(445,230,60,60);

    block11 = new Box(625,170,60,60);
    block12 = new Box(685,170,60,60);
    block13 = new Box(745,170,60,60);
    block14 = new Box(805,170,60,60);
    block15 = new Box(865,170,60,60);

    block16 = new Box(685,140,60,60);
    block17 = new Box(745,140,60,60);
    block18 = new Box(805,140,60,60);

    block19 = new Box(745,110,60,60);

    striker = new Striker(100,150,60,30);

    rope = new SlingShot(striker.body,{x:100,y:50})

    state = "noColor"
}

function draw() {
    if(state!="noColor")
    {
        background(col);
    }
    
    rectMode(CENTER);
    Engine.update(engine);
    
    stand1.display();
    stand2.display();
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();

    block5.display();
    block6.display();
    block7.display();

    block8.display();
    block9.display();

    block10.display();

    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();

    block16.display();
    block17.display();
    block18.display();

    block19.display();

    striker.display();

    rope.display();  
    
    getBackgroundColor()
}

function mouseDragged(){
    Matter.Body.setPosition(striker.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    rope.fly();
}

function keyPressed()
{
    if(keyCode === 32)
    {
        rope.attach(striker.body);
    }
}

async function getBackgroundColor()
{
    var response = await fetch("http://worldtimeapi.org/api/timezone/Australia/Sydney");
    var responseJSON = await response.json();
    console.log(responseJSON);
    
    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    console.log(hour);

    state = "color";

    if(hour >= 6 && hour <= 19)
    {
        col = "yellow";
    }
    else
    {
        col = "red";
    }
}