


/*


TypeScript - Array lastIndexOf()
Advertisements
 Previous Page Next Page  
lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.

Syntax
array.lastIndexOf(searchElement[, fromIndex]);
Parameter Details
searchElement − Element to locate in the array.

fromIndex − The index at which to start searching backwards. Defaults to the array's length, i.e., the whole array will be searched. If the index is greater than or equal to the length of the array, the whole array will be searched. If negative, it is taken as the offset from the end of the array.

Return Value
Returns the index of the found element from the last.

Example


*/

var index = [12, 5, 8, 130, 44].lastIndexOf(8); 
console.log("index is : " + index );


/* 

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

index is : 3



*/