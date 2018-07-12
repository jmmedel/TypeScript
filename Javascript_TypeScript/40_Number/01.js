/*

TypeScript - Numbers
Advertisements
 Previous Page Next Page
TypeScript like JavaScript supports numeric values as Number objects. A number object converts numeric literal to an instance of the number class. The Number class acts as a wrapper and enables manipulation of numeric literals as they were objects.

Syntax
var var_name = new Number(value)
In case a non-numeric argument is passed as an argument to the Number’s constructor, it returns NaN (Not–a–Number)

The following table lists a set of properties of the Number object −

S.No.	Property & Description
1.
MAX_VALUE

The largest possible value a number in JavaScript can have 1.7976931348623157E+308.

2.
MIN_VALUE

The smallest possible value a number in JavaScript can have 5E-324.

3.
NaN

Equal to a value that is not a number.

4.
NEGATIVE_INFINITY

A value that is less than MIN_VALUE.

5.
POSITIVE_INFINITY

A value that is greater than MAX_VALUE.

6.
prototype

A static property of the Number object. Use the prototype property to assign new properties and methods to the Number object in the current document.

7.
constructor

Returns the function that created this object's instance. By default, this is the Number object.

Example


*/
console.log("TypeScript Number Properties: ");
console.log("Maximum value that a number variable can hold: " + Number.MAX_VALUE);
console.log("The least value that a number variable can hold: " + Number.MIN_VALUE);
console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY);
console.log("Value of Negative Infinity:" + Number.POSITIVE_INFINITY);
/*

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

TypeScript Number Properties:
Maximum value that a number variable can hold: 1.7976931348623157e+308
The least value that a number variable can hold: 5e-324
Value of Negative Infinity: -Infinity
Value of Negative Infinity:Infinity

*/ 
