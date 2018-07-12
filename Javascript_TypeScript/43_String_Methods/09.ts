


/* 

TypeScript - String search()
Advertisements
 Previous Page Next Page  
This method executes the search for a match between a regular expression and this String object.

Syntax
string.search(regexp);
Argument Details
regexp − A regular expression object. If a non-RegExp object obj is passed, it is implicitly converted to a RegExp by using new RegExp(obj).

Return Value
If successful, the search returns the index of the regular expression inside the string. Otherwise, it returns -1.

Example


*/

var re = /apples/gi; 
var str = "Apples are round, and apples are juicy.";
if (str.search(re) == -1 ) { 
   console.log("Does not contain Apples" ); 
} else { 
   console.log("Contains Apples" ); 
} 


/* 

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

Contains Apples

*/