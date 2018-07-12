

/*

TypeScript - String indexOf()
Advertisements
 Previous Page Next Page  
This method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex or -1 if the value is not found.

Syntax
string.indexOf(searchValue[, fromIndex])
Argument Details
searchValue − A string representing the value to search for.

fromIndex − The location within the calling string to start the search from. It can be any integer between 0 and the length of the string. The default value is 0.

Return Value
Returns the index of the found occurrence, otherwise -1 if not found.

Example


*/

var str1 = new String( "This is string one" ); 
 
var index = str1.indexOf( "string" ); 
console.log("indexOf found String :" + index );   

var index = str1.indexOf( "one" ); 
console.log("indexOf found String :" + index );

/* 

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

indexOf found String :8 
 
indexOf found String :15

*/