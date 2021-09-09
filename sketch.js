var  ball
function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = createSprite(200,200,10,10);
 }

function draw() 
{
  background("green");
if (keyDown("left") ){
  ball.x=ball.x -5;
}
  drawSprites();
}




