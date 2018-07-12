


/* 

TypeScript - Array push()
Advertisements
 Previous Page Next Page  
push() method appends the given element(s) in the last of the array and returns the length of the new array.

Syntax
array.push(element1, ..., elementN);
Parameter Details
element1, ..., elementN − The elements to add to the end of the array.

Return Value
Returns the length of the new array.

Example


*/

var numbers = new Array(1, 4, 9); 
var length = numbers.push(10); 
console.log("new numbers is : " + numbers );  
length = numbers.push(20); 
console.log("new numbers is : " + numbers );


/* 

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

new numbers is : 1,4,9,10 
new numbers is : 1,4,9,10,20

*/