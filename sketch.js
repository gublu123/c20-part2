var canvas, bg;
var together;
var tom, tomImg1,tomImg2, tomImg3;
var jerry, jerryImg1, jerryImg2, jerryImg3;

function preload() {
    //load the images here
    bg = loadImage("garden.png");
    tomImg1 = loadAnimation("tomOne.png");
    tomImg2 = loadAnimation("tomTwo.png", "tomThree.png");
    tomImg3 = loadAnimation("tomFour.png")

    jerryImg1 = loadAnimation("jerryOne.png");
    jerryImg2 = loadAnimation("jerryTwo.png", "jerryThree.png");
    jerryImg3 = loadAnimation("jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    
    //create tom and jerry sprites here
    tom = createSprite(870, 600);
    tom.scale = 0.2;
    tom.addAnimation("sleeping", tomImg1);

    jerry = createSprite(200, 600);
    jerry.scale = 0.15;
    jerry.addAnimation("standing", jerryImg1);
}

function draw() {

    background(bg);

    //Write condition here to evalute if tom and jerry collide
    if(tom.x - jerry.x < (tom.width - jerry.width)/2 )
    {
        tom.velocityX = 0;
        //write code here to change animation
        tom.addAnimation("tomLastImage", tomImg3);
        tom.x = 300;
        tom.scale = 0.2;
        tom.changeAnimation("tomLastImage");

        jerry.addAnimation("jerryLastImage", jerryImg3);
        jerry.scale = 0.15;
        jerry.changeAnimation("jerryLastImage");
    }

    text(mouseX + ',' + mouseY, 10, 45);

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW)
{
    tom.velocityX = -5;
    tom.addAnimation("tomRunning", tomImg2);
    tom.changeAnimation("tomRunning");

    jerry.addAnimation("jerryTeasing", jerryImg2);
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerryTeasing")
}

}
