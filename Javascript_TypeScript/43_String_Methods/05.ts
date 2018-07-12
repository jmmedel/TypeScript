

/*

TypeScript - String lastIndexOf()
Advertisements
 Previous Page Next Page  
This method returns the index within the calling String object of the last occurrence of the specified value, starting the search at fromIndex or -1 if the value is not found.

Syntax
string.lastIndexOf(searchValue[, fromIndex])
Argument Details
searchValue − A string representing the value to search for.

fromIndex − The location within the calling string to start the search from. It can be any integer between 0 and the length of the string. The default value is 0.

Return Value
Returns the index of the last found occurrence, otherwise -1 if not found.

Example


*/

var str1 = new String( "This is string one and again string" ); 
var index = str1.lastIndexOf( "string" );
console.log("lastIndexOf found String :" + index ); 
  
index = str1.lastIndexOf( "one" ); 
console.log("lastIndexOf found String :" + index );


/* 

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

lastIndexOf found String :29  

lastIndexOf found String :15

*/