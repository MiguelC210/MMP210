/*Meme version one
*/

var panda; // global 
var game; // global
var sleep; // global
var eat; // global

function preload(){
    panda = loadImage("panda.jpg");
    game = loadImage("game.jpg");
    sleep = loadImage("sleep.jpg");
    eat = loadImage("eat.jpeg")
}

function setup() {
    createCanvas(800, 500);
}

function draw() {
    background(255);  
    
  if (mouseX < width/2 && mouseY < height/2){
    image(panda, 0,0,width,height);
    
   text("When you have to study for", 130, 35);
    textSize(40);
    textFont("Comic Sans MS");
    fill("black");
    
   
    text("an exam",150,80);
    textSize(25);
    textFont("Comic Sans MS");
    fill("black");
    
    text("Me: ", 50, 150);
    textSize(40);
    textFont("Comic Sans MS");
    fill("black");
    } 
    
        else if (mouseX > width/2 && mouseY < height/2) {
    image(sleep,0,0,width,height);
        
    text("When you finally open your book", 10, 35);
    textSize(40);
    textFont("Comic Sans MS");
    fill("black");
    
   
    text("to study", 40, 83);
    textSize(25);
    textFont("Comic Sans MS");
    fill("black");
    
    text("Also me: ", 50, 150);
    textSize(40);
    fill("black");
    } 
        else if (mouseX < width/2 && mouseY > height/2){
    image(eat,0,0,width,height)
        
    text("When the exam is today", 250, 90);
    textSize(40);
    textFont("Comic Sans MS");
    fill("black");
    

    
    text("Also me: ", 230, 250);
    textSize(40);
    textFont("Comic Sans MS");
    fill("black");
        
    
    } 
        else {
    image(game,0,0,width,height)
        
    text("When you still have another day to", 10, 25);
    textSize(25);
    textFont("Comic Sans MS");
    fill("black");
    
   
    text("study for the", 5, 80);
    textSize(25);
    textFont("Comic Sans MS");
    fill("black");
    
    text("exam", 5, 150);
    textSize(25);
    textFont("Comic Sans MS");
    fill("black");        
            
    text("Me: ", 490, 220);
    textSize(30);
    textFont("Comic Sans MS");
    fill("black");
    }    
   
}



