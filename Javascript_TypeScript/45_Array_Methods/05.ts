

/* 

TypeScript - Array indexOf()
Advertisements
 Previous Page Next Page  
indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

Syntax
array.indexOf(searchElement[, fromIndex]);
Parameter Details
searchElement − Element to locate in the array.

fromIndex − The index at which to begin the search. Defaults to 0, i.e. the whole array will be searched. If the index is greater than or equal to the length of the array, -1 is returned.

Return Value
Returns the index of the found element.

Example


*/

var index = [12, 5, 8, 130, 44].indexOf(8); 
console.log("index is : " + index );

/*

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

index is : 2


*/