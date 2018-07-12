

/*

TypeScript - String concat()
Advertisements
 Previous Page Next Page  
This method adds two or more strings and returns a new single string.

Syntax
string.concat(string2, string3[, ..., stringN]);
Argument Details
string2...stringN − These are the strings to be concatenated.

Return Value
Returns a single concatenated string.

Example


*/

var str1 = new String( "This is string one" ); 
var str2 = new String( "This is string two" ); 
var str3 = str1.concat( str2 ); 
console.log("str1 + str2 : "+str3)

/* 

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

str1 + str2 : This is string oneThis is string two

*/
