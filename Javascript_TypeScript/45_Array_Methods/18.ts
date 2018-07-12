

/* 

TypeScript - Array splice()
Advertisements
 Previous Page Next Page  
splice() method changes the content of an array, adding new elements while removing old elements.

Syntax
array.splice(index, howMany, [element1][, ..., elementN]);
Parameter Details
index − Index at which to start changing the array.

howMany − An integer indicating the number of old array elements to remove. If howMany is 0, no elements are removed.

element1, ..., elementN − The elements to add to the array. If you don't specify any elements, splice simply removes the elements from the array.

Return Value
Returns the extracted array based on the passed parameters.

Example

*/


var arr = ["orange", "mango", "banana", "sugar", "tea"];  
var removed = arr.splice(2, 0, "water");  
console.log("After adding 1: " + arr );  
console.log("removed is: " + removed); 
          
removed = arr.splice(3, 1);  
console.log("After removing 1: " + arr );  
console.log("removed is: " + removed);

/* 

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

After adding 1: orange,mango,water,banana,sugar,tea 
removed is:  
After removing 1: orange,mango,water,sugar,tea 
removed is: banana

*/