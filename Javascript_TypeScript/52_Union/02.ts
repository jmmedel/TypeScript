


/* 

Example: Union Type and function parameter

*/

function disp(name:string|string[]) { 
    if(typeof name == "string") { 
       console.log(name) 
    } else { 
       var i; 
       
       for(i = 0;i<name.length;i++) { 
          console.log(name[i])
       } 
    } 
 } 
 disp("mark") 
 console.log("Printing names array....") 
 disp(["Mark","Tom","Mary","John"])


 /* 
 
 The function disp() can accept argument either of the type string or a string array.

On compiling, it will generate following JavaScript code.

//Generated by typescript 1.8.10
function disp(name) {
   if (typeof name == "string") {
      console.log(name);
   } else {
      var i;
      for (i = 0; i < name.length; i++) {
         console.log(name[i]);
      }
   }
}

disp("mark");
console.log("Printing names array....");
disp(["Mark", "Tom", "Mary", "John"]);

The output is as follows −

Mark 
Printing names array…. 
Mark 
Tom
Mary
John 

 */