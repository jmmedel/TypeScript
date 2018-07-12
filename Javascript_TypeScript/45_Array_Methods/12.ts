

/* 


TypeScript - Array reduceRight()
Advertisements
 Previous Page Next Page  
reduceRight() method applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value

Syntax
array.reduceRight(callback[, initialValue]);
Parameter Details
callback − Function to execute on each value in the array.

initialValue − Object to use as the first argument to the first call of the callback.

Return Value
Returns the reduced right single value of the array.

Example

*/

var total = [0, 1, 2, 3].reduceRight(function(a, b){ return a + b; }); 
console.log("total is : " + total );


/*

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

total is : 6

*/