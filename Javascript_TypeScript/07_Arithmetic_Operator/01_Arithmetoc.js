/*

TypeScript - Arithmetic Operators Examples
Advertisements
 Previous Page Next Page
Assume the values in variables a and b are 10 and 5 respectively.

Operator	Description	Example
+ (Addition)	returns the sum of the operands	a + b is 15
- (Subtraction)	returns the difference of the values	a - b is 5
* (Multiplication)	returns the product of the values	a * b is 50
/ (Division)	performs a division operation and returns the quotient	a / b is 2
% (Modulus)	performs a division and returns the remainder	a % b is 0
++ (Increment)	Increments the value of the variable by one	a++ is 11
-- (Decrement)	Decrements the value of the variable by one	a-- is 9
Example


*/
var num1 = 10;
var num2 = 2;
var res = 0;
res = num1 + num2;
console.log("Sum:        " + res);
res = num1 - num2;
console.log("Difference: " + res);
res = num1 * num2;
console.log("Product:    " + res);
res = num1 / num2;
console.log("Quotient:   " + res);
res = num1 % num2;
console.log("Remainder:   " + res);
num1++;
console.log("Value of num1 after increment " + num1);
num2--;
console.log("Value of num2 after decrement " + num2);
