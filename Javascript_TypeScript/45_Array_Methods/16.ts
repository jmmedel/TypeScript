

/* 

TypeScript - Array some()
Advertisements
 Previous Page Next Page  
some() method tests whether some element in the array passes the test implemented by the provided function.

Syntax
array.some(callback[, thisObject]);
Parameter Details
callback − Function to test for each element.

thisObject − Object to use as this when executing callback.

Return Value
If some element passes the test, then it returns true, otherwise false.

Example

*/

function isBigEnough(element, index, array) { 
    return (element >= 10); 
           
 } 
           
 var retval = [2, 5, 8, 1, 4].some(isBigEnough);
 console.log("Returned value is : " + retval ); 
           
 var retval = [12, 5, 8, 1, 4].some(isBigEnough); 
 console.log("Returned value is : " + retval );


 /* 
 
 On compiling, it will generate the same code in JavaScript.

Its output is as follows −

Returned value is : false 
Returned value is : true
 
 */