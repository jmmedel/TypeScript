


/* 

Anonymous Function
Functions that are not bound to an identifier (function name) are called as anonymous functions. These functions are dynamically declared at runtime. Anonymous functions can accept inputs and return outputs, just as standard functions do. An anonymous function is usually not accessible after its initial creation.

Variables can be assigned an anonymous function. Such an expression is called a function expression.

Syntax
var res = function( [arguments] ) { ... }
Example ─ A Simple Anonymous function


*/

var msg = function() { 
    return "hello world";  
 } 
 console.log(msg())

 /* 
 
 On compiling, it will generate the same code in JavaScript.

It will produce the following output −

hello world

 */