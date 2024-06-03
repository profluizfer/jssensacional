function setup() {
    createCanvas(500, 300);
  }
  
  function draw() {
    background("gold");
    stroke("green");
    fill("green");
    triangle(20,0,250,130,480,0);
    stroke("green");
    fill("green");
    triangle(20,300,250,170,480,300);
    stroke("black");
    fill("black");
    triangle(0,20,220,150,0,280);
    stroke("black");
    fill("black");
    triangle(500,20,280,150,500,280);
  }