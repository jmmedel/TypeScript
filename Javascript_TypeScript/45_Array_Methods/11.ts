



/*

TypeScript - Array reduce()
Advertisements
 Previous Page Next Page  
reduce() method applies a function simultaneously against two values of the array (from left-to-right) as to reduce it to a single value.

Syntax
array.reduce(callback[, initialValue]);
Parameter Details
callback − Function to execute on each value in the array.

initialValue − Object to use as the first argument to the first call of the callback.

Return Value
Returns the reduced single value of the array.

Example


*/

var total = [0, 1, 2, 3].reduce(function(a, b){ return a + b; }); 
console.log("total is : " + total );


/* 

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

total is : 6

*/