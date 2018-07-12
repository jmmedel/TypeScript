

/* 

TypeScript - Array map()
Advertisements
 Previous Page Next Page  
map() method creates a new array with the results of calling a provided function on every element in this array.

Syntax
array.map(callback[, thisObject]);
Parameter Details
callback − Function that produces an element of the new Array from an element of the current one.

thisObject − Object to use as this when executing callback.

Return Value
Returns the created array.

Example

*/

var numbers = [1, 4, 9]; 
var roots = numbers.map(Math.sqrt); 
console.log("roots is : " + roots );

/* 

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

roots is : 1,2,3

*/