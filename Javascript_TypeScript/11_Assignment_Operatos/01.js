/*

TypeScript - Assignment Operators Examples
Advertisements
 Previous Page Next Page
Operator	Description	Example
= (Simple Assignment)	Assigns values from the right side operand to the left side operand	C = A + B will assign the value of A + B into C
+= (Add and Assignment)	It adds the right operand to the left operand and assigns the result to the left operand.	C += A is equivalent to C = C + A
-= (Subtract and Assignment)	It subtracts the right operand from the left operand and assigns the result to the left operand.	C -= A is equivalent to C = C - A
*= (Multiply and Assignment)	It multiplies the right operand with the left operand and assigns the result to the left operand.	C *= A is equivalent to C = C * A
/= (Divide and Assignment)	It divides the left operand with the right operand and assigns the result to the left operand.
Note − Same logic applies to Bitwise operators, so they will become <<=, >>=, >>=, &=, |= and ^=.

Example

*/
var a = 12;
var b = 10;
a = b;
console.log("a = b: " + a);
a += b;
console.log("a+=b: " + a);
a -= b;
console.log("a-=b: " + a);
a *= b;
console.log("a*=b: " + a);
a /= b;
console.log("a/=b: " + a);
a %= b;
console.log("a%=b: " + a);
/*

On compiling, it will generate the following JavaScript code −

var a = 12;
var b = 10;
a = b;

console.log("a=b: " + a);
a += b;

console.log("a+=b: " + a);
a -= b;

console.log("a-=b: " + a);
a *= b;

console.log("a*=b: " + a);
a /= b;

console.log("a/=b: " + a);
a %= b;
console.log("a%=b: " + a);
It will produce the following output −

a = b: 10
a += b: 20
a -= b: 10
a *= b: 100
a /= b: 10
a %= b: 0

*/
