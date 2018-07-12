


/* 

TypeScript - Relational Operators Examples
Advertisements
 Previous Page Next Page  
Relational Operators test or define the kind of relationship between two entities. Relational operators return a Boolean value, i.e., true/ false.

Assume the value of A is 10 and B is 20.

Operator	Description	Example
>	Greater than	(A > B) is False
<	Lesser than	(A < B) is True
>=	Greater than or equal to	(A >= B) is False
<=	Lesser than or equal to	(A <= B) is True
==	Equality	(A == B) is True
!=	Not equal	(A != B) is True
Example


*/

var num1:number = 5;
var num2:number = 9;

console.log("Value of num1: "+num1); 
console.log("Value of num2 :"+num2);
 
var res = num1>num2 
console.log("num1 greater than num2: "+res)

res = num1<num2 
console.log("num1 lesser than num2: "+res)  

res = num1>=num2 
console.log("num1 greater than or equal to  num2: "+res)

res = num1<=num2
console.log("num1 lesser than or equal to num2: "+res)  

res = num1==num2 
console.log("num1 is equal to num2: "+res)  

res = num1!=num2  
console.log("num1 is not equal to num2: "+res)



/* 

The transpiled JS version of the above code −

var num1 = 5; 
var num2 = 9; 
console.log("Value of num1: " + num1); 
console.log("Value of num2 :" + num2); 

var res = num1 > num2; 
console.log("num1 greater than num2: " + res); 

res = num1 < num2; 
console.log("num1 lesser than num2: " + res); 

res = num1 >= num2; 
console.log("num1 greater than or equal to  num2: " + res); 

res = num1 <= num2; 
console.log("num1 lesser than or equal to num2: " + res); 

res = num1 == num2; 
console.log("num1 is equal to num2: " + res); 

res = num1 != num2; 
console.log("num1 not equal to  num2: " + res);
It will produce the following output −

Value of num1: 5 
Value of num2 :9 
num1 greater than num2: false 
num1 lesser than num2: true 
num1 greater than or equal to num2: false 
num1 lesser than or equal to num2: true 
14 num1 is equal to num2: false 
16 num1 not equal to num2: true

*/