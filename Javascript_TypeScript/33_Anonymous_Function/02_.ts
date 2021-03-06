


/* 

Example ─ Anonymous function with parameters

*/

var res = function(a:number,b:number) { 
    return a*b;  
 }; 
 console.log(res(12,2)) 

/* 
The anonymous function returns the product of the values passed to it.

On compiling, it will generate following JavaScript code −

//Generated by typescript 1.8.10
var res = function (a, b) {
   return a * b;
};
console.log(res(12, 2));
The output of the above code is as follows −

24

*/