

/*

TypeScript - Array slice()
Advertisements
 Previous Page Next Page  
slice() method extracts a section of an array and returns a new array.

Syntax
array.slice( begin [,end] );
Parameter Details
begin − Zero-based index at which to begin extraction. As a negative index, start indicates an offset from the end of the sequence.

end − Zero-based index at which to end extraction.

Return Value
Returns the extracted array based on the passed parameters.

Example


*/


var arr = ["orange", "mango", "banana", "sugar", "tea"]; 
console.log("arr.slice( 1, 2) : " + arr.slice( 1, 2) );  
console.log("arr.slice( 1, 3) : " + arr.slice( 1, 3) );


/* 

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

arr.slice( 1, 2) : mango 
arr.slice( 1, 3) : mango,banana


*/