function setup() { //runs once
createCanvas (720, 720); //creates a canvas 720x720
background (224, 212, 255);
}

function draw() { //runs in a loop
fill (150, 225, 250); //fills shape w RGB color
strokeWeight (8); //assigns stroke weight
translate (60, 60); //creates a new origin pt at 60,60
quad (0,0,
      300,0,
      300,300,
      0,300);
quad (300,0,
      600,0,
      600,300,
      300,300); //add 300 in x direction
quad (0,300,
      300,300,
      300,600,
      0,600);//add 300 in y direction
quad (300,300,
      600,300,
      600,600,
      300,600); //add 300 in x direction
}
