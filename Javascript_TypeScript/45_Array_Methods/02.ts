

/* 


TypeScript - Array every()
Advertisements
 Previous Page Next Page  
every() method tests whether all the elements in an array passes the test implemented by the provided function.

Syntax
array.every(callback[, thisObject]);
Parameter Details
callback − Function to test for each element.

thisObject − Object to use as this when executing callback.

Return Value
Returns true if every element in this array satisfies the provided testing function.

Example

*/

function isBigEnough(element, index, array) { 
    return (element >= 10); 
 } 
           
 var passed = [12, 5, 8, 130, 44].every(isBigEnough); 
 console.log("Test Value : " + passed );

 /* 
 
 On compiling, it will generate the same code in JavaScript.

Its output is as follows −

Test Value : false

 */