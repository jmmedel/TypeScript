

/* 


TypeScript - Number toExponential()
Advertisements
 Previous Page Next Page  
This method returns a string representing the number object in exponential notation.

Syntax
number.toExponential( [fractionDigits] )
Parameter Details
fractionDigits − An integer specifying the number of digits after the decimal point. Defaults to as many digits as necessary to specify the number.

Return Value
A string representing a Number object in exponential notation with one digit before the decimal point, rounded to fractionDigits digits after the decimal point. If the fractionDigits argument is omitted, the number of digits after the decimal point defaults to the number of digits necessary to represent the value uniquely.

Example

*/

//toExponential() 
var num1 = 1225.30 
var val = num1.toExponential(); 
console.log(val)

/* 

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

1.2253e+3

*/