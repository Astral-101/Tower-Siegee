const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var groundBottom, ground1;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18, box19;
var hexagon, hexagonImage;
var sling;

function preload() {
    hexagonImage = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    groundBottom = new Ground(600, 380, 1200, 20);
    ground1 = new Ground(594, 250, 200, 18);

    box1 = new Box(520, 235, 30, 40);
    box2 = new Box(550, 235, 30, 40);
    box3 = new Box(580, 235, 30, 40);
    box4 = new Box(610, 235, 30, 40);
    box5 = new Box(640, 235, 30, 40);
    box6 = new Box(670, 235, 30, 40);

    box7 = new Box(535, 195, 30, 40);
    box8 = new Box(565, 195, 30, 40);
    box9 = new Box(595, 195, 30, 40);
    box10 = new Box(625, 195, 30, 40);
    box11 = new Box(655, 195, 30, 40);

    box12 = new Box(550, 155, 30, 40);
    box13 = new Box(580, 155, 30, 40);
    box14 = new Box(610, 155, 30, 40);
    box15 = new Box(640, 155, 30, 40);

    box16 = new Box(565, 115, 30, 40);
    box17 = new Box(595, 115, 30, 40);
    box18 = new Box(625, 115, 30, 40);

    box19 = new Box(595, 75, 30, 40);

    hexagon = new Hexa(200, 250, 50, 50);

    sling = new SlingShot(hexagon.body, {x : 225, y : 125});

    
}

function draw(){
    background("black");
    Engine.update(engine);   

    groundBottom.display();
    ground1.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    hexagon.display();
    sling.display();

}

function mouseDragged(){
    Matter.Body.setPosition(hexagon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}

function keyPressed(){
    if (keyCode === 32){
        sling.attach(hexagon.body);
    }
}
