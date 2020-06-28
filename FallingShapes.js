//Every click, a random shape appears and fall down along the Y
//Adding the counter of clicks


//Variables for position and clicking
let positionY; //Setting the variable that makes the shape move 
let positionX;
let pressMouse;  //To make movement when mouse is pressed: if 0, no click/movement; if 1, click/movement
let displayShape; //To hide the shape and show it only when pressed: if, hidden; if 1, shown

//Variables for random appearance of shapes
let arrayShapes;// to store the shapes according to the mouseClick
let arrayX; // to store the mouseX according to the mouseClick
let arrayY;// to store the mouseY according to the mouseClick and make the value increased





//Variables for Counter
let num = 0;
let nunito;

//Loading font for Counter
function preload() {
  nunito = loadFont('assets/Nunito-ExtraBold.ttf');
}





function setup() {
  createCanvas(1700, 1200);
  background (225, 225, 225); //Create colored background
  
  positionY=150;
  positionX=100;
  pressMouse=0;
  displayShape=0;
  
  arrayShapes=[];
  arrayX=[];
  arrayY=[];
  
}


function draw(){
  background (225, 225, 225); //Hiding the different shapes that appears

              
      //Number counter
                textAlign(CENTER, CENTER);
                textFont (nunito);
                textSize(50);
                noStroke();
                fill(0, 83, 122);
                text(num, 150, 150);
                
                noFill();
                textSize(30);
                fill(0, 83, 122);
                text("RESET", 800, 50);
            

       //Shapes
       for(var i=0;i<arrayShapes.length;i++){   //when stating that i=0, which is the variable iteration, i<TotNumber and i<= i+1, which means that it executes the "clap" from 1 to TotNumber
          arrayY[i]=arrayY[i]+5;  //Change of positionY that determines the velocity
          switch(arrayShapes[i]){  //instead of repeating everytime if(){ shapeTot } else { }, in this way it makes the shapes all defined together
          
                case "Circle":
                    noFill ();
                    stroke (55, 195, 221); //Setting the outline to light blue
                    strokeWeight (24); //Increasing the stroke weight
                    ellipse (arrayX[i], arrayY[i], 75, 75); 
                break;
                
                case "Cross":
                  noFill ();
                  stroke (237, 27, 54); 
                  strokeWeight (27);
                  beginShape (LINES);
                  vertex (arrayX[i], arrayY[i]-75);  //Making sure the center of the cross is aligned with the mouse
                  vertex (arrayX[i], arrayY[i]+75);
                  vertex (arrayX[i]-75, arrayY[i]);
                  vertex (arrayX[i]+75, arrayY[i]);
                  endShape();
                break;
                
                  case "Line":
                noFill ();
                stroke (205, 171, 209);
                strokeWeight (27);
                line (arrayX[i]-75, arrayY[i], arrayX[i]+75, arrayY[i]); //Drawing the line aligned to the mouse
                break;
                
                   case "Corner":
                noFill ();
                stroke (238, 42, 123); //Setting the outline to strong pink
                strokeWeight (27);
                beginShape (LINES);
                vertex (arrayX[i], arrayY[i]-75);
                vertex (arrayX[i], arrayY[i]);
                vertex (arrayX[i], arrayY[i]);
                vertex (arrayX[i]+75, arrayY[i]);
                endShape();
                break;
                
                     case "QuarterCircle":
                 noFill ();
                stroke (188, 50, 146); //Setting the outline to violet
                strokeWeight (27);
                arc(arrayX[i], arrayY[i], 160, 160, 0, HALF_PI);
                break;
                
                case "TwoThirdsCircle":
                noFill ();
                stroke (249, 156, 43); //Setting the outline to orange
                strokeWeight (27);
                arc(arrayX[i], arrayY[i], 160, 160, 0, -HALF_PI);
                break;
                
                case "SemiCircle":
                noFill ();
                stroke (249, 193, 113); //Setting the outline to light orange
                strokeWeight (27);
                arc(arrayX[i], arrayY[i], 160, 160, PI, TWO_PI);
                break;
                
                case "Zigzag":
                noFill ();
                stroke (150, 213, 208); //Setting the outline to light blue
                strokeWeight (27);
                beginShape (LINES);
                vertex (arrayX[i]-106, arrayY[i]-26);
                vertex (arrayX[i]-53, arrayY[i]+27);
                vertex (arrayX[i]-53, arrayY[i]+27);
                vertex (arrayX[i], arrayY[i]-26);
                vertex (arrayX[i], arrayY[i]-26);
                vertex (arrayX[i]+53, arrayY[i]+27);
                vertex (arrayX[i]+53, arrayY[i]+27);
                vertex (arrayX[i]+106, arrayY[i]-26);
                endShape();
                break;
                
                case "Bezier": 
                scale (4); //Scaling the bezier 
                translate(arrayX[i]/4-50,arrayY[i]/4-50); //Applying the translation to the original one, instead of bezier(arrayX[i]+50, arrayY[i]+5, arrayX[i]+25, arrayY[i]-25, arrayX[i]+5, arrayY[i]+25, arrayX[i]-20, arrayY[i]-5);
                              /* Showing off the control points
                              fill(249, 157, 37); //Setting color to orange
                              ellipse(85, 55, 10, 10); //point2
                              ellipse(55, 20, 10, 10); //point1
                              fill(237, 27, 54); //Setting color to red
                              ellipse(45, 80, 10, 10); //point3
                              ellipse(15, 45, 10, 10); //point4
                              */
                noFill();
                stroke(197, 201, 47); //Setting color to light green
                strokeWeight (8);
                bezier(85,  55, 60, 25, 40, 75, 15, 45);
              
                translate(-arrayX[i]/4+50,-arrayY[i]/4+50); //Translating back
                scale (0.25); //Scaling back the bezier -> 4 * 0.25 = 1
                break;
           }    
       }
       
           
       
 }      
       
       
       
       





//Random shapes
 function mousePressed() {
   //pressMouse=1;     not necessary anymore, as defined iteration
   //displayShape=1;   not necessary anymore, as defined condition
   let randomNumberShape=parseInt(random(1,10));
   let defaultShape="Circle";    //Defined a variable that make the array start
   switch(randomNumberShape){
     case 1:
         defaultShape="Circle";
     break; 
     case 2:
         defaultShape="Cross";
     break;
     
     case 3:
         defaultShape="Line";
     break;
     
     case 4:
         defaultShape="Corner";
     break;
     
     case 5:
         defaultShape="QuarterCircle";
     break;
     
     case 6:
         defaultShape="TwoThirdsCircle";
     break;
     
     case 7:
         defaultShape="SemiCircle";
     break;
     
      case 8:
         defaultShape="Zigzag";
      break;
     
      case 9:
         defaultShape="Bezier";
      break;
   }  
    

   
   
   
   arrayShapes[arrayShapes.length]=defaultShape; //Select a random shape within the collection of arrayShapes, starting 
   arrayX[arrayX.length]=mouseX;// Put the value of the mouseX into the array, at the end -> in order to change everytime
   arrayY[arrayY.length]=mouseY;// Put the value of the mouseX into the array, at the end
   
   
     //Number counter  
     if (mouseY < 150) {
    num = 0;
  } else {
    num++;
  }  
   
   
}
