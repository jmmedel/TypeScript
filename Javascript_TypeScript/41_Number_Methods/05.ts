


/* 


TypeScript - Number toString()
Advertisements
 Previous Page Next Page  
This method returns a string representing the specified object. The toString() method parses its first argument, and attempts to return a string representation in the specified radix (base).

Syntax
number.toString( [radix] )
Parameter Details
radix − An integer between 2 and 36 specifying the base to use for representing numeric values.

Return Value
Returns a string representing the specified Number object.

Example

*/


var num = new Number(10); 
console.log(num.toString()); 
console.log(num.toString(2)); 
console.log(num.toString(8));

/* 

On compiling, it will generate the same code in JavaScript.

The code will produce the following output −

10 
1010 
12

*/