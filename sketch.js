var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

 var divisions = [];
var particles = [];
var plinkos = [];
var gameState = "play";
var score = 0;
var turn = 5;

var divisionHeight=300;
var score =0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var j = 0; j <=width; j = j + 80) {
     divisions.push(new Divisions(j, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("20",30,770);
  text("20",110,770);
  text("20",190,770);
  text("20",265,770);
  text("50",350,770);
  text("50",430,770);
  text("75",510,770);
  text("75",580,770);
  text("100",665,770);
  text("100",750,770);


  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}
function mousePressed(){
if(gameState!== "end"){
  count++;
  particle = new Particle(mouseX, 10, 10, 10)
   }
}
if(particle!==null){
   particle.display();

 if(particle.body.position.y>760){
    if(particle.body.position.x<300){
    score=score+500;
    particle=null;
    if(count>=5)gameState = "end";
  }
 }
}