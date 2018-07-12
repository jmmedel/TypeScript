


/* 

TypeScript - Array join()
Advertisements
 Previous Page Next Page  
join() method joins all the elements of an array into a string.

Syntax
array.join(separator);
Parameter Details
separator − Specifies a string to separate each element of the array. If omitted, the array elements are separated with a comma.

Return Value
Returns a string after joining all the array elements.

Example

*/

var arr = new Array("First","Second","Third"); 
          
var str = arr.join(); 
console.log("str : " + str );  
          
var str = arr.join(", "); 
console.log("str : " + str );  
          
var str = arr.join(" + "); 
console.log("str : " + str );

/* 

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

str : First,Second,Third 
str : First, Second, Third 
str : First + Second + Third


*/