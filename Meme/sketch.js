/*Meme version one
*/

var pika; // global 

function preload(){
    pika = loadImage("pika.jpg");
}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(255);  
    
    image(pika, 0, 0, width, height);
    
    fill("black");
    textAlign(CENTER, CENTER);
    textSize(25);
    textFont("Comic Sans MS");
    text("When you realize you forgot to do", 250, 15);
    text("your MMP210 homework", 250, 43);
    text("and it's due in 20 mins!", 250, 70);
}