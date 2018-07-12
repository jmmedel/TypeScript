

/* 

TypeScript - Array filter()
Advertisements
 Previous Page Next Page  
filter() method creates a new array with all elements that pass the test implemented by the provided function.

Syntax
array.filter (callback[, thisObject]);
Parameter Details
callback − Function to test for each element.

thisObject − Object to use as this when executing callback.

Return Value
Returns created array.

Example


*/

function isBigEnough(element, index, array) { 
    return (element >= 10); 
 } 
           
 var passed = [12, 5, 8, 130, 44].filter(isBigEnough); 
 console.log("Test Value : " + passed );


/* 

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

Test Value :12,130,44


*/