var boychacter,sky,boy,bj;
function preload(){
  sky=loadImage("images/sky.jpg")
  boy=loadImage("images/boy.png")
  redb=loadImage("images/red.png")
  blueb=loadImage("images/blue.png")
  orangeb=loadImage("images/orange.png")
}



function setup() {
  createCanvas(displayWidth,displayHeight);
  
  bj=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight)
  bj.addImage("sky",sky);
  bj.velocityY=2;
boychacter=createSprite(displayWidth/2,displayHeight-78, 50, 50);
boychacter.addImage("boy",boy);
boychacter.scale=0.5

}

function draw() {
  background(0); 
  console.log(displayHeight)
  if(bj.y>=displayHeight-230){
bj.y=displayHeight/2

  }
  if(keyDown("UP")){
    boychacter.y=boychacter.y-1

  }
  
  if(keyDown("DOWN")){
    boychacter.y=boychacter.y+1

  }
  if(keyDown("LEFT")){
    boychacter.x=boychacter.x-1

  }
  if(keyDown("RIGHT")){
    boychacter.x=boychacter.x+1

  }

  Balloon();
  
  
  
  drawSprites();
}

function Balloon(){

  if(frameCount%50==0){
    var Balloon=createSprite(random(10,displayWidth-10),0,5,5)
    Balloon.velocityY=2
    Balloon.velocityX=0;
    var mynumber=round(random(1,3))
    console.log(mynumber)
    if(mynumber==1){
      Balloon.addImage("redb",redb)
    }
    if(mynumber==2){
      Balloon.addImage("orangeb",orangeb)
    }
    if(mynumber==3){
      Balloon.addImage("blueb",blueb)
    }
    
    Balloon.scale=0.4
    

  }
}