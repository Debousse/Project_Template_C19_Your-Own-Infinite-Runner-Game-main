var alienShip, spaceShip, laser;
var alienShipImg, spaceShipImg, laserImg;
var gameState = PLAY;
var score = 5;

function preload(){
    alienShipImg = loadImage("Alien.png");
    spaceShipImg = loadImage("spaceShip.png");
    laserImg = loadImage("laser.png");
}

function setup() {
    createCanvas(500,650)
    background(0);
    
    spaceShip = createSprite(250,600,60,60)
    spaceShip.scale = 0.3
    spaceShip.addImage(spaceShipImg);
}

function draw() {

    if (keyDown("space")) {
        createLaser();
    }

    if (World.frameCount % 50 == 0) {
        alienShipSpawn();
      }


    

    background(0);
    drawSprites();

    spaceShip.x = World.mouseX;
    text("Score: "+ score,350,20)
}

function createLaser() {
    var laser= createSprite(100, 100, 60, 10);
    laser.addImage(laserImg);
    laser.y = 600;
    laser.x=spaceShip.x;
    laser.velocityY = -4;
    laser.lifetime = 140;
    laser.scale = 0.1;
    
  }

  function alienShipSpawn() {
    //write code for spwaning blue balloons

    var alienShip = createSprite(Math.round(random(20, 370)), 0, 5, 5);
    alienShip.addImage(alienShipImg);
    alienShip.velocityY = frameCount/100+4;
    alienShip.lifetime = 300;
    alienShip.scale = 0.1;
  }



