

/*

TypeScript - Array sort()
Advertisements
 Previous Page Next Page  
sort() method sorts the elements of an array.

Syntax
array.sort( compareFunction );
Parameter Details
compareFunction − Specifies a function that defines the sort order. If omitted, the array is sorted lexicographically.

Return Value
Returns a sorted array.

Example


*/

var arr = new Array("orange", "mango", "banana", "sugar"); 
var sorted = arr.sort(); 
console.log("Returned string is : " + sorted );

/* 

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

Returned string is : banana,mango,orange,sugar

*/