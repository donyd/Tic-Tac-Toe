window.onload = function() {
     
     var canvas = document.querySelector("canvas");
     var context = canvas.getContext("2d");

     // Main container
     context.fillStyle = "aliceblue";
     context.fillRect(100, 100, 400, 400);

     
     // Creating the outline
     context.lineWidth = 4;
     context.beginPath();
     context.rect(100, 100, 400, 400);
     context.stroke();

     // Play cell dimensions
     let cellWidth = 100;
     let cellHeight = 100;
  
     

     for (let i = 0; i < 3; i++) 
     { for (let j = 0; j < 3; j++) 
        {
            // cell offset using 
            let x = 150 + cellWidth * i;
            let y = 150 + cellHeight * j;
    
            
            context.lineWidth = 4;
            context.beginPath();
            context.rect(x, y, cellWidth, cellHeight);
            context.strokeStyle = "black";           
            context.stroke();  
            
        }

     }


      // Creating inner outline to create cross style effect for play area

      context.lineWidth = 4;
      context.beginPath();
      context.rect(150, 150, 300, 300);
      context.strokeStyle = "aliceblue";
      context.stroke();


}