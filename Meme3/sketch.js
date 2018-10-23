/*Meme version one
*/

var panda; // global 
var game; // global
var sleep; // global
var eat; // global
var r = 0;
var c = 1; //change
var m = 0;


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
    background(0);  
    
    translate(width/300, height/300);
    var r = frameCount / 3000 * PI;
    shearX(r);
    
    
  if (mouseX < width/2 && mouseY < height/2){
    image(panda, 0,0,width,height);
    
    noStroke();
   text("When you have to study for", 130, 35);
    textSize(40);
    textFont("Comic Sans MS");
    fill(m, 0, 100);
    
      m += c;
      if (m > 255 || m < 0){
          c *= -1;
      }
   
    text("an exam",150,80);
    textSize(25);
    textFont("Comic Sans MS");
    fill(m, 0, 100);
    
    text("Me: ", 50, 150);
    textSize(40);
    textFont("Comic Sans MS");
    fill(m, 0, 100);
    } 
    
        else if (mouseX > width/2 && mouseY < height/2) {
    image(sleep,0,0,width,height);
        
    text("When you finally open your book", 10, 35);
    textSize(40);
    textFont("Comic Sans MS");
    fill(m, 0, 100);
        
            m += c;
            if (m > 255 || m < 0){
                c *= -1;
            }
   
    text("to study", 40, 83);
    textSize(25);
    textFont("Comic Sans MS");
    fill(m, 0, 100);
    
    text("Also me: ", 50, 150);
    textSize(40);
    fill(m, 0, 100);
    } 
        else if (mouseX < width/2 && mouseY > height/2){
    image(eat,0,0,width,height)
        
    text("When the exam is today", 250, 90);
    textSize(40);
    textFont("Comic Sans MS");
    fill(m, 0, 100);
    
            m += c;
            if (m > 255 || m < 0){
                c *= -1;
            }
    
    text("Also me: ", 230, 250);
    textSize(40);
    textFont("Comic Sans MS");
    fill(m, 0, 100);
        
    
    } 
        else {
    image(game,0,0,width,height)
        
    text("When you still have another day to", 10, 25);
    textSize(25);
    textFont("Comic Sans MS");
    fill(m, 0, 100);
    
            m += c;
            if (m > 255 || m < 0){
                c *= -1;
            }
   
    text("study for the", 5, 80);
    textSize(25);
    textFont("Comic Sans MS");
    fill(m, 0, 100);
    
    text("exam", 5, 150);
    textSize(25);
    textFont("Comic Sans MS");
    fill(m, 0, 100);        
            
    text("Me: ", 390, 120);
    textSize(30);
    textFont("Comic Sans MS");
    fill(m, 0, 100);
    }    
   
}



