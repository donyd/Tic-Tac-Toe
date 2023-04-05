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

function checkMouse(event) {
    let x = event.offsetX;
    let y = event.offsetY;
    document.getElementById("demo_x").innerHTML = "The x-coordinate is: " + x;
    document.getElementById("demo_y").innerHTML = "The y-coordinate is: " + y;
    drawCircle(x, y);
}


function drawCircle(xpos, ypos) {
    var canvas = document.querySelector("canvas");
    var context = canvas.getContext("2d");
    let play = false;
    
    // Play area bounds check
    if ( (xpos >= 150 && ypos >= 150) && ( xpos <= 444 && ypos <= 444))
    {
        play = true;    
    } else {
        play = false;
    }

    console.log(play);

    if (play)
    {
        console.log(play);
        
        if ( (xpos < 248 && xpos > 148) ) 
        {
            xpos = 198;
            ypos = 198;
        }
    
        // context.moveTo(xpos, ypos)
        context.beginPath();
        context.arc(xpos, ypos, 40, 0, 2 * Math.PI);
        
        context.strokeStyle = "black";
        context.stroke();
        console.log(xpos + " " + ypos);
    }
}


/*
    Marking and representation of the play area:
        
    _1_|_2_|_3_
    _4_|_5_|_6_
    _7_|_8_|_9_

    Absolute positions (center in x & y coordinates) based on edge of the browser and canvas elements
    1 - 198, 198
    2 - 298, 198
    3 - 398, 198
    4 - 198, 298
    5 - 298, 298
    6 - 398, 298
    7 - 198, 398
    8 - 297, 398
    9 - 398, 398

*/