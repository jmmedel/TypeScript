

/* 


TypeScript - String split()
Advertisements
 Previous Page Next Page  
This method splits a String object into an array of strings by separating the string into substrings.

Syntax
string.split([separator][, limit]);
Argument Details
separator − Specifies the character to use for separating the string. If separator is omitted, the array returned contains one element consisting of the entire string.

limit − Integer specifying a limit on the number of splits to be found.

Return Value
The split method returns the new array. Also, when the string is empty, split returns an array containing one empty string, rather than an empty array.

Example


*/

var str = "Apples are round, and apples are juicy."; 
var splitted = str.split(" ", 3); 
console.log(splitted)

/* 

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

[ 'Apples', 'are', 'round,' ]

*/