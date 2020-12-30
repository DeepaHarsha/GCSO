var car,wall,c1,c,l1,l2,w1,w2,speed,speed1,speed2,weight,weight1,weight2;

function setup() {
  createCanvas(1600,1200);
  speed=random(55,90)
	weight=random(400,1500)
	
    
    speed1=random(110,170)
	weight1=random(400,1500)

    
    speed2=random(55,90)
	weight2=random(400,1500)


    
 car = createSprite(100, 200, 60, 40);
 car.shapeColor=color(255);
 wall = createSprite(1400, 200, 50, 200);
 wall.shapeColor=color(80,80,80);
 c1 = createSprite(100, 600, 60, 40);
 c1.shapeColor=color(255);
 c2 = createSprite(100, 1000, 60, 40);
 c2.shapeColor=color(255);

 l1 = createSprite(800, 400, 1600, 20);
 l2 = createSprite(800, 800, 1600, 20);
 w1 = createSprite(1400, 600, 50, 200);
 w1.shapeColor=color(80,80,80);

 w2 = createSprite(1400, 1000, 50, 200);
 w2.shapeColor=color(80,80,80);
}

function draw() {

  background(0,0,0); 
  car.velocityX=speed;
  c1.velocityX=speed1;
  c2.velocityX=speed2;
 
  if(wall.x-car.x < (car.width+wall.width)/2)
  {
  	car.velocityX=0;
  	
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		car.shapeColor=color(255,0,0);
	}
	if(deformation<180 && deformation>100)
	{
		car.shapeColor=color(230,230,0);
	}
	if(deformation<100)
	{
		car.shapeColor=color(0,255,0);
	}
  }

  if(w1.x-c1.x < (c1.width+w1.width)/2)
  {
  	c1.velocityX=0;
  	
  	var deformation=0.5 * weight1 * speed1* speed1/22500;
	if(deformation>180)
	{
		c1.shapeColor=color(255,0,0);
	}
	if(deformation<180 && deformation>100)
	{
		c1.shapeColor=color(230,230,0);
	}
	if(deformation<100)
	{
		c1.shapeColor=color(0,255,0);
	}
  }

  if(w2.x-c2.x < (c2.width+w1.width)/2)
  {
  	c2.velocityX=0;
  	
  	var deformation=0.5 * weight2 * speed2* speed2/22500;
	if(deformation>180)
	{
		c2.shapeColor=color(255,0,0);
	}
	if(deformation<180 && deformation>100)
	{
		c2.shapeColor=color(230,230,0);
	}
	if(deformation<100)
	{
		c2.shapeColor=color(0,255,0);
	}
  }

  car.collide(wall);
  c1.collide(w1);
  c2.collide(w2);

  

  

 
  

 


  drawSprites();
}

