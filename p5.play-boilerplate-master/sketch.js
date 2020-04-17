var fixedRect,movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4

function setup() {
  createCanvas(1200,800);
 fixedRect =  createSprite(600, 400, 50, 80);
 fixedRect.shapeColor = "green";
 movingRect = createSprite(400,200,80,30);
 movingRect.shapeColor = "green";
  gameObject1 =  createSprite(100, 100, 50, 50);
 gameObject1.shapeColor = "green";
  gameObject2 =  createSprite(200, 100, 50, 50);
 gameObject2.shapeColor = "green";
  gameObject3 =  createSprite(300, 100, 50, 50);
 gameObject3.shapeColor = "green";
  gameObject4 =  createSprite(400, 100, 50, 50);
 gameObject4.shapeColor = "green";
}
}

function draw() {
  background(0,0,0);
  movingRect.velocityX = 12 ;
  movingRect.velocityY = -5;
  console.log(movingRect.x - fixedRect.x); 
 if(isTouching(movingRect,gameObject1)){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  drawSprites();
}
function isTouching(gameObject1,gameObject2){
if(gameObject1.x - gameObject2.x<gameObject2.width/2+ gameObject1.width/2
    &&gameObject2.x -gameObject1.x<gameObject2.width/2+gameObject1.width/2
   &&gameObject1.y - gameObject2.y<gameObject2.height/2+ gameObject1.height/2
  &&gameObject2.y -gameObject1.y<gameObject2.height/2+ gameObject1.height/2
    ){
  return true;
  }
  else{
  return false;
  }
}
