//create a program that enables us to customize the number of squares in a grid

function setup() { //runs once
createCanvas (windowWidth, windowWidth); //creates a canvas 720x720
//background (224, 212, 255);
}

function draw() { //runs in a loop
fill (150, 225, 250); //fills shape w RGB color
strokeWeight (1); //assigns stroke weight

var num = 2; //number of sides in the array
var sideLen = windowWidth/num; //side length variable

for (var y = 0; y < windowWidth; y= y + sideLen){
  for (var x=0; x < windowWidth; x= x + sideLen) {
  quad (x,y,
        x + sideLen,y,
        x + sideLen,y + sideLen,
        x,y + sideLen);
  }
}
}
