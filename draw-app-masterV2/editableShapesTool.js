function editableShapesTool() {
    
    this.icon = "assets/editableShape.jpg";
    this.name = "editableShape";
    
    this.draw = function(){
        if(mouseIsPressed){
            currentShape.push({
                x: mouseX,
                y: mouseY
            });
            console.log(currentShape);
        }
        
        beginShape();
        for(var i = 0; i < currentShape.length; i++){
            vertex(currentShape[i].x,
            currentShape[i].y);
        }
        endShape();
    }
    
    

}

function mousePressOnCanvas(canvas){
    if(mouseX > canvas.elt.offsetLeft &&
    mouseX < (canvas.elt.offsetLeft + canvas.width) &&
    mouseY > canvas.elt.offsetTop &&
    mouseY < (canvas.elt.offsetTop + canvas.height)
        ){
        return true;
    }
    return false;
    }
    