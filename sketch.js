var bullet, wall;
var speed, weight, thickness;
var damage;


function setup() {
  createCanvas(1200,400);

  //Car sprite
  bullet=createSprite(50, 200, 50, 50);

  //Wall Sprite
  wall=createSprite(1100, 200, thickness, height/2);


  //Setting up random speed and weight
  speed=random(223, 321);
  weight=random(30, 50); 
  thickness=random(22, 83);
}

function draw() {
  background (0);  

  //Depth
  bullet.depth=wall.depth;
  bullet.depth=bullet.depth+1;

  //Car's velocity
  bullet.velocityX=speed;

  //Deformation calculation
  damage=(0.5*weight*speed*speed)/(thickness*thickness*thickness);

  if(wall.x - bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX=0;
    //Conditions
      if(damage>10){
        bullet.shapeColor=rgb(255, 0, 0)
      }

      if(damage = 10){
        bullet.shapeColor=rgb(230, 230, 0)
      }

      if(damage<10){
        bullet.shapeColor=rgb(0, 255, 0)
      }
  }
  drawSprites();
}