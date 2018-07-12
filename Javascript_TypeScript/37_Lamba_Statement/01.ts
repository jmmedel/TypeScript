

/* 

Example: Lambda statement

*/

var foo = (x:number)=> {    
    x = 10 + x 
    console.log(x)  
 } 
foo(100)

/* 

The function’s reference is returned and stored in the variable foo.

On compiling, it will generate following JavaScript code −

//Generated by typescript 1.8.10
var foo = function (x) {
   x = 10 + x;
   console.log(x);
};
foo(100);
The output of the above program is as follows −

110

*/