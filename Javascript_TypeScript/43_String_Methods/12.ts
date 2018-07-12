

/* 

TypeScript - String substr()
Advertisements
 Previous Page Next Page  
This method returns the characters in a string beginning at the specified location through the specified number of characters.

Syntax
string.substr(start[, length]);
Argument Details
start − Location at which to start extracting characters (an integer between 0 and one less than the length of the string).

length − The number of characters to extract.

Note − If start is negative, substr uses it as a character index from the end of the string.

Return Value
The substr() method returns the new sub-string based on given parameters.

Example

*/

var str = "Apples are round, and apples are juicy."; 
console.log("(1,2): "    + str.substr(1,2)); 
console.log("(-2,2): "   + str.substr(-2,2)); 
console.log("(1): "      + str.substr(1)); 
console.log("(-20, 2): " + str.substr(-20,2)); 
console.log("(20, 2): "  + str.substr(20,2));



/* 

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

(1,2): pp 
(-2,2): y. 
(1): pples are round, and apples are juicy. 
(-20, 2): nd 
(20, 2): d

*/