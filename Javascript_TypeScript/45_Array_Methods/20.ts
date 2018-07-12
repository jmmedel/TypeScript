

/*

TypeScript - Array unshift()
Advertisements
 Previous Page Next Page  
unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.

Syntax
array.unshift( element1, ..., elementN );
Parameter Details
element1, ..., elementN − The elements to add to the front of the array.

Return Value
Returns the length of the new array. It returns undefined in IE browser.

Example

*/

var arr = new Array("orange", "mango", "banana", "sugar"); 
var length = arr.unshift("water"); 
console.log("Returned array is : " + arr );
console.log("Length of the array is : " + length );


/*

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

Returned array is : water,orange,mango,banana,sugar 
Length of the array is : 5

*/