//Create variables here

var dog,happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  Dog = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  
   dog = createSprite(250,250,10,10);
  dog.addImage(Dog);
  dog.scale = 0.5;

  foodStock = database.ref('ref');
  foodStock.on("value",readStock);
  
}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here

  textSize(20);
  fill("white");
  stroke("green");
  text("Press UP_ARROW to feed the dog");

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    food:x
  })
}



