//Create variables here
var dog,happydog,database,foodS,FoodStock
function preload()
{
  //load images here
  dog = loadImage("doglmg.png");
  happydog = loadImage("doglmg1.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(200,200,20,50)

  FoodStock =database.ref("food");
  FoodStock.on("value",readpStock);
}


function draw() {  
  background(46,  139, 87)

   if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(doglmg1);
   } 

   function readpStock(data){
    foodS = data.val();
  }
  
  function writeStock(x){
    if(x<=0){
      x = 0;
    }else{
      x=x-1;
    }
    database.ref('/').update({
      food:x
    })
  }
  

  drawSprites();
  //add styles here

}




