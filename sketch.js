var garden,rabbit,apple,leaf;
var gardenImg,rabbitImg,appleImg,leafImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
 
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);
//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}

function appleSpawn(){
    apple = createSprite(random(50, 350),40, 10, 10);
    apple.addImage(appleImg);
    apple.scale = 0.1
    //apple.x//Math.round(random(10,60))
    apple.velocityY = 3;
    
    
    //assigning lifetime to the variable
   apple.lifetime = 250
}


function leavesSpawn(){
  leaf = createSprite(random(50, 350),40, 10, 10);
  leaf.addImage(leafImg);
  leaf.scale = 0.1
  //apple.x//Math.round(random(10,60))
  leaf.velocityY = 3;
  
  
  //assigning lifetime to the variable
 leaf.lifetime = 250
}



function draw(){
 
   background(0);
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX
  var select_sprites = Math.round(random(1,2))

  if (frameCount % 80 == 0){

    if(select_sprites == 1){
  appleSpawn()

    }
    else{
leavesSpawn()
    }

  }
  drawSprites();

}