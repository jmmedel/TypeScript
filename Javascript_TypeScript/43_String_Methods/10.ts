

/*


TypeScript - String slice()
Advertisements
 Previous Page Next Page  
This method extracts a section of a string and returns a new string.

Syntax
string.slice( beginslice [, endSlice] );
Argument Details
beginSlice − The zero-based index at which to begin extraction.

endSlice − The zero-based index at which to end extraction. If omitted, slice extracts to the end of the string.

Return Value
If successful, slice returns the index of the regular expression inside the string. Otherwise, it returns -1.

Example

*/

var str = "Apples are round, and apples are juicy."; 
var sliced = str.slice(3, -2); 
console.log(sliced);


/*

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

les are round, and apples are juic

*/