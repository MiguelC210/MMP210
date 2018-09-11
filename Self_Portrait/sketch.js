function setup() {
	createCanvas(800, 500);
}

function draw() {
	background("white");

//face
fill("peachpuff")
ellipse(420,280,320)
    
//eye
fill("white")
ellipse(350,260,100,120)
fill("black")
ellipse(350,260,40,40) 

//eye
fill("white")
ellipse(480,260,100,120)
fill("black")
ellipse(480,260,40,40) 
    
//nose
fill("brown")
triangle(420,300, 400, 360, 461,361);
  
//lines
noFill();
stroke(255, 102, 0);
stroke(0);
stroke(255, 102, 0);

//mouth
fill("white")
ellipse(390,400,60)
fill("pink")
ellipse(390,415,30)
}