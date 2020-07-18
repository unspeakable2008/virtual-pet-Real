//Create variables here
var dog,;
function preload()

	//load images here


function setup() {
  createCanvas(500, 500);
dog = createSprite(200,200 ,50,50)
 
}


function draw() {  
background(46,139,87)
  food = database.ref('food')
foodstock.on("value",readStock);
  drawSprites();
  //add styles here

  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);

  }
}
function readStock(data){
  food = data.val();
}
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}

