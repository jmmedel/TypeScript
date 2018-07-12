



/* 


TypeScript - Number toFixed()
Advertisements
 Previous Page Next Page  
This method formats a number with a specific number of digits to the right of the decimal.

Syntax
number.toFixed( [digits] )
Parameter Details
digits − The number of digits to appear after the decimal point.

Return Value
A string representation of number that does not use exponential notation and has the exact number of digits after the decimal place.

Example

*/

var num3 = 177.234 
console.log("num3.toFixed() is "+num3.toFixed()) 
console.log("num3.toFixed(2) is "+num3.toFixed(2)) 
console.log("num3.toFixed(6) is "+num3.toFixed(6))

/* 

On compiling, it will generate the same code in JavaScript.

The code will produce the following output −

num3.toFixed() is 177 
num3.toFixed(2) is 177.23 
num3.toFixed(6) is 177.234000

*/