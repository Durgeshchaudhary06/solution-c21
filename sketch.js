
var music;

var box;
var surf1,surf2,surf3,surf4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    
    box=createSprite(200,15,20,20);
    box.velocityX=6;
    box.velocityY=6;
    box.shapeColor="white";

    surf1=createSprite(100,590,190,10);
    surf1.shapeColor=("blue");

    surf2=createSprite(300,590,190,10);
    surf2.shapeColor=("orange");

    surf3=createSprite(500,590,190,10);
    surf3.shapeColor=("red");

    surf4=createSprite(700,590,190,10);
    surf4.shapeColor=("green")
    
    
}

function draw() {
    background(rgb(169,169,169));
    edges= createEdgeSprites();
    box.bounceOff(edges);

    
   
    
    if(box.isTouching(surf1)&&box.bounceOff(surf1)){
        box.shapeColor=("blue");
       

    }
    if(box.isTouching(surf2)&&box.bounceOff(surf2)){
        box.shapeColor=("orange");
        
    }
    if(box.isTouching(surf3)&&box.bounceOff(surf3)){
        box.shapeColor=("red");  
        
    }
    if(box.isTouching(surf4)&&box.bounceOff(surf4)){ 
        box.shapeColor=("green");
        
    }

    drawSprites();
    
}
