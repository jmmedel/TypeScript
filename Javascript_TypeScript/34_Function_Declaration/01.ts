


/* 

The Function Constructor
TypeScript also supports defining a function with the built-in JavaScript constructor called Function ().

Syntax
var res = new Function( [arguments] ) { ... }.
Example

*/

var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);
