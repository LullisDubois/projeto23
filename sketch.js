const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Engine = Matter.Engine;

var World1;
var Engine1;

//Crie um namespace (espaço de nomes) para Mecanismo
//Crie um namespace (espaço de nomes) para Mundo
//Crie um namespace (espaço de nomes) para Corpos
//Crie um namespace (espaço de nomes) para Corpo


function setup() {
  createCanvas(400,400);
  Engine1 = Engine.create();    //crie o mecanismo
  World1 = Engine1.world;       //Adicione mundo ao mecanismo
  
  var object1Options = {
    
    restitution: 1.5, 
}
 
groundOptions= {
isStatic:true
}

ground = Bodies.rectangle(200,390,400,20,groundOptions);
world.add(world1,ground)

object1 = Bodies.rectangle(200,100,50,50, object1Options);
World.add(World1,object1)
  
  
//crie o solo
//adicione ao mundo

}


function draw() {
  background("black")

  Engine.update(Engine1)
  rectMode(CENTER);
  rect(object1.position.x,object1.position.y,50,50)
}

