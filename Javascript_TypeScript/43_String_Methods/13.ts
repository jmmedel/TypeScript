


/* 

TypeScript - String substring()
Advertisements
 Previous Page Next Page  
This method returns a subset of a String object.

Syntax
string.substring(indexA, [indexB])
Argument Details
indexA − An integer between 0 and one less than the length of the string.

indexB − (optional) An integer between 0 and the length of the string.

Return Value
The substring method returns the new sub-string based on given parameters.

Example

*/


var str = "Apples are round, and apples are juicy."; 
console.log("(1,2): "    + str.substring(1,2)); 
console.log("(0,10): "   + str.substring(0, 10)); 
console.log("(5): "      + str.substring(5));


/* 

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

(1,2): p 
(0,10): Apples are 
(5): s are round, and apples are juicy.

*/