var cat,catImage1,catImage2,catImage3
var mouse,mouseImage1,mouseImage2,mouseImage3
var backgroundImage



function preload() {
    //load the images here
    backgroundImage = loadImage("images/garden.png")
    catImage1 = loadImage("images/cat1.png")
    catImage2 = loadAnimation("images/cat2.png","images/cat3.png")
    catImage3 = loadAnimation("images/cat4.png")

    mouseImage1 = loadImage("images/mouse1.png")
    mouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImage3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(850,680)
    cat.addImage(catImage1)
    cat.scale = 0.2
    
    mouse = createSprite(200,660)
    mouse.addImage(mouseImage1)
    mouse.scale = 0.2

}

function draw() {

    background(backgroundImage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX = 0
        cat.addAnimation("collided",catImage3);
        cat.changeAnimation("collided")
        cat.x = 300
        mouse.addAnimation("searching",mouseImage3);
        mouse.changeAnimation("searching")

    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if (keyCode == LEFT_ARROW){
      cat.addAnimation("running",catImage2);
      cat.changeAnimation("running")
      cat.velocityX = -5
      mouse.addAnimation("dancing",mouseImage2);
      mouse.changeAnimation("dancing")
  }



}





























