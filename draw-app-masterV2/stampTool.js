function StampTool() {
    
    this.icon = "assets/stamp.jpg";
    this.name = "stamp";
    
    stampSizeSlider = createSlider(5,50,20);
    nStampSlider = createSlider(1,20,5);
        
    
  
    
    this.draw = function() {
        
        
        if(mouseIsPressed){
            for(var i = 0; i < nStampSlider.value(); i++){
                
                var stampSize = stampSizeSlider.value();
                var stampX = mouseX - stampSize/2;
                var stampY = mouseY - stampSize/2;
                image(stamp, stampX, stampY, stampSize, stampSize);
            }
        }
    }
    
}