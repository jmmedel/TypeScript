


/* 


TypeScript - Number toPrecision()
Advertisements
 Previous Page Next Page  
This method returns a string representing the number object to the specified precision.

Syntax
number.toPrecision( [ precision ] )
Parameter Details
precision − An integer specifying the number of significant digits.

Return Value
Returns a string representing a Number object in fixed-point or exponential notation rounded to precision significant digits.

Example

*/

var num = new Number(7.123456); 
console.log(num.toPrecision()); 
console.log(num.toPrecision(1)); 
console.log(num.toPrecision(2));

/* 
On compiling, it will generate the same code in JavaScript.

The code will produce the following output −

7.123456 
7 
7.1

*/