


/*

TypeScript - Array concat()
Advertisements
 Previous Page Next Page  
concat() method returns a new array comprised of this array joined with two or more arrays.

Syntax
array.concat(value1, value2, ..., valueN);
Parameter Details
valueN − Arrays and/or values to concatenate to the resulting array.

Return Value
Returns a new array.

Example


*/

var alpha = ["a", "b", "c"]; 
var numeric = [1, 2, 3];

var alphaNumeric = alpha.concat(numeric); 
console.log("alphaNumeric : " + alphaNumeric );


/*

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

alphaNumeric : a,b,c,1,2,3

*/