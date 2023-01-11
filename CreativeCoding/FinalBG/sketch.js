//create a program that enables us to customize the number of squares in a grid
let gif;
function preload (){
  gif = loadImage ('assets/AIBG.gif');
}

function setup() { //runs once
createCanvas (windowWidth, windowWidth); //creates a canvas 720x720
//background (224, 212, 255);
}

function draw() { //runs in a loop
fill (150, 225, 250); //fills shape w RGB color
strokeWeight (1); //assigns stroke weight

background (225, 246, 225);

var num = 20; //number of sides in the array
var sideLen = windowWidth/num; //side length variable

translate (-150, -150); // this will give your design a bleed effect

for (var y = 0; y < 2 * windowWidth; y= y + sideLen){
  for (var x=0; x < 2 * windowWidth; x= x + sideLen) {
image (gif, x, y, windowWidth/num, windowWidth/num);
  }
}
}

function windowResized (){ //allow window refresh with window resizing
  resizeCanvas (windowwidth, windowHeight);
}
