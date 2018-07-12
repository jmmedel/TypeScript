

/* 

TypeScript - Array forEach()
Advertisements
 Previous Page Next Page  
forEach() method calls a function for each element in the array.

Syntax
array.forEach(callback[, thisObject]);
Parameter Details
callback − Function to test for each element.

thisObject − Object to use as this when executing callback.

Return Value
Returns created array.

Example

*/

let num = [7, 8, 9];
num.forEach(function (value) {
  console.log(value);
}); 

/* 

On compiling, it will generate the following JavaScript code −

var num = [7, 8, 9];
num.forEach(function (value) {
    console.log(value);
});
Its output is as follows −

1
2
3


*/