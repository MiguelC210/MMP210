/*
this is the version 3 self portrait.
*/
var r = 0;
var b = 255;

function setup() {
	createCanvas(800, 500);
}

function draw() {
	background(r, 0, b);
    r = map(mouseX, 0, 600, 0, 255);
    b = map(mouseX, 0, 600, 255, 255);
    
    
    /* head shape */ 
    var head = 420;
    var heady = 280;
    var headw = 320;
    
    /* shapes of the eyes */
    var lefteye = mouseY;
    var righteye = mouseX;
    var eyey = 260;
    var eyew = 100;
    var eyeh = 120;
    var smalleye = 40;
    
    /* shape for the nose */
    var nosex = 420;
    var nosey = 300;
    var noseh = 400;
    var nosew = 360;
    var nose1 = 461;
    var nose2 = 330;
    
    /* secondary line color */
    var line1 = frameCount;
    var line2 = 102;
    var line3 = 0;
    
    /* mouth shapes */
    var mouth = 390;
    var bigmouth = 400;
    var bigmouth1 = 60;
    var smallmouth = 415;
    var smallmouth1 = 30;
    
    /* hair shape */
    var hair = 650;
    var hairy = 250;
    var hairw = 400;
    var hairh = 50;
    var hair1 = 150;
    var hair2 = 200;
    
    //colors
    var black = black;
    var peachpuff = peachpuff;
    var white = white;
    var brown = brown;

//face
fill("peachpuff")
ellipse(head, heady, headw)
    
//lefteye
fill("white")
ellipse(lefteye, eyey, eyew, eyeh)
fill("black")
ellipse(lefteye, eyey, smalleye, smalleye) 

//righteye
fill("white")
ellipse(righteye, eyey, eyew, eyeh)
fill("black")
ellipse(righteye, eyey, smalleye, smalleye) 
    
//nose
fill("brown")
triangle(nosex, nosey, noseh, nosew, nose1, nose2);
  
//lines
noFill();
stroke(line1, line2, line3);
stroke(line3);
stroke(line1, line2, line3);

//mouth
fill("white")
ellipse(mouth, bigmouth, bigmouth1)
fill("pink")
ellipse(mouth, smallmouth, smallmouth1)
    
//hair
fill("brown")
triangle(hair, hairy, hairw, hairh, hair1, hair2);
}