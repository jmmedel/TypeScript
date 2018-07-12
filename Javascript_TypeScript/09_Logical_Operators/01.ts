



/* 
TypeScript - Logical Operators Examples
Advertisements

 Previous Page Next Page  
Logical Operators are used to combine two or more conditions. Logical operators too return a Boolean value. Assume the value of variable A is 10 and B is 20.

Operator	Description	Example
&& (And)	The operator returns true only if all the expressions specified return true	(A > 10 && B > 10) is False
|| (OR)	The operator returns true if at least one of the expressions specified return true	(A > 10 || B >10) is True
! (NOT)	The operator returns the inverse of the expression’s result. For E.g.: !(>5) returns false	!(A >10 ) is True
Example

*/

var avg:number = 20; 
var percentage:number = 90; 

console.log("Value of avg: "+avg+" ,value of percentage: "+percentage);
 
var res:boolean = ((avg>50)&&(percentage>80)); 
console.log("(avg>50)&&(percentage>80): ",res);

var res:boolean = ((avg>50)||(percentage>80)); 
console.log("(avg>50)||(percentage>80): ",res);

var res:boolean=!((avg>50)&&(percentage>80)); 
console.log("!((avg>50)&&(percentage>80)): ",res);

/* 

On compiling, it will generate following JavaScript code.

var avg = 20; 
var percentage = 90;
console.log("Value of avg: " + avg + " ,value of percentage: " + percentage); 

var res = ((avg > 50) && (percentage > 80)); 
console.log("(avg > 50) && (percentage > 80): ", res); 

var res = ((avg > 50) || (percentage > 80)); 
console.log("(avg > 50)||(percentage > 80): ", res); 

var res = !((avg > 50) && (percentage > 80)); 
console.log("!((avg > 50)&&(percentage > 80)): ", res);
The above code snippet will produce the following output −

Value of avg: 20 ,value of percentage: 90 
(avg > 50)&&(percentage > 80):  false 
(avg > 50)||(percentage > 80):  true 
!((avg > 50)&&(percentage > 80)):  true

*/


/* 

The above code snippet will produce the following output −

Value of avg: 20 ,value of percentage: 90 
(avg > 50)&&(percentage > 80):  false 
(avg > 50)||(percentage > 80):  true 
!((avg > 50)&&(percentage > 80)):  true
Short-circuit Operators (&& and ||)
The && and || operators are used to combine expressions. The && operator returns true only when both the conditions return true. Let us consider an expression −

var a = 10 
var result = ( a<10 && a>5)
In the above example, a < 10 and a > 5 are two expressions combined by an && operator. Here, the first expression returns false. However, the && operator requires both the expressions return true. So, the operator skips the second expression.

The || operator returns true, if one of the expressions returns true. For example −

var a = 10 
var result = ( a>5 || a<10)
In the above snippet, two expressions a > 5 and a < 10 are combined by a || operator. Here, the first expression returns true. Since, the first expression returns true, the || operator skips the subsequent expression and returns true.

Due to this behavior of the && and || operator, they are called as short-circuit operators.


*/