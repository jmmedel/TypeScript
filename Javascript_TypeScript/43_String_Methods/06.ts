

/* 

TypeScript - String localeCompare()
Advertisements
 Previous Page Next Page  
This method returns a number indicating whether a reference string comes before or after or is the same as the given string in sorted order.

Syntax
string.localeCompare( param )
Argument Details
param − A string to be compared with string object.

Return Value
0 − If the string matches 100%.

1 − no match, and the parameter value comes before the string object's value in the locale sort order.

A negative value − no match, and the parameter value comes after the string object's value in the local sort order.

Example

*/

var str1 = new String( "This is beautiful string" );
  
var index = str1.localeCompare( "This is beautiful string");  

console.log("localeCompare first :" + index );

/* 

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

localeCompare first :0

*/


