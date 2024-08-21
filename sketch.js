function setup() {
    createCanvas(500, 400);
  }
  
  function draw() {
    
    if (mouseIsPressed == true) {
      rect(mouseX, mouseY, 30, 30);
    }
    
    // console.log(mouseIsPressed)
    
    stroke("yellow");
    fill("blue");
  }
  
  console.log("Desenhando!!")