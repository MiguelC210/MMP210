/*Meme version one
*/

var panda; // global 

function preload(){
    panda = loadImage("panda.jpg");
}

function setup() {
    createCanvas(800, 500);
}

function draw() {
    background(255);  
    
    image(panda, 0, 0, width/2, height);
    image(panda, width/2, 0, width/2, height);
    
    fill("black");
    textAlign(CENTER, CENTER);
    textSize(25);
    textFont("Comic Sans MS");
    text("When you have to study for", 180, 15);
   
if (mouseIsPressed){
    text("Also me:", 50, 150);
    }
else {
    text("an exam", 150, 43);
    }
}



