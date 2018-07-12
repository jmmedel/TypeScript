/// <reference path = "IShape.ts" />   
/// <reference path = "Circle.ts" /> 
/// <reference path = "Triangle.ts" />  
         function drawAllShapes(shape:Drawing.IShape) { 
            shape.draw(); 
         } 
         drawAllShapes(new Drawing.Circle());
         drawAllShapes(new Drawing.Triangle());
      
   
/* 

The above code can be compiled and executed using the following command −

tsc --out app.js TestShape.ts  

node app.js

*/