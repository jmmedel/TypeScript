


/*

Recursion and TypeScript Functions
Recursion is a technique for iterating over an operation by having a function call to itself repeatedly until it arrives at a result. Recursion is best applied when you need to call the same function repeatedly with different parameters from within a loop.

Example – Recursion

*/

function factorial(number) {
    if (number <= 0) {         // termination case
       return 1; 
    } else {     
       return (number * factorial(number - 1));     // function invokes itself
    } 
 }; 
 console.log(factorial(6));      // outputs 720 

 /*
 
 On compiling, it will generate the same code in JavaScript.

Here is its output −

720

 */