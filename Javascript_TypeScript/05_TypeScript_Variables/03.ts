


/* 

Inferred Typing in TypeScript
Given the fact that, Typescript is strongly typed, this feature is optional. TypeScript also encourages dynamic typing of variables. This means that, TypeScript encourages declaring a variable without a type. In such cases, the compiler will determine the type of the variable on the basis of the value assigned to it. TypeScript will find the first usage of the variable within the code, determine the type to which it has been initially set and then assume the same type for this variable in the rest of your code block.

The same is explained in the following code snippet −

Example: Inferred Typing


*/

var num = 2;    // data type inferred as  number 
console.log("value of num "+num); 
num = "12";
console.log(num);


/* 

In the above code snippet −

The code declares a variable and sets its value to 2. Note that the variable declaration doesn’t specify the data type. Hence, the program uses inferred typing to determine the data type of the variable, i.e., it assigns the type of the first value that the variable is set to. In this case, num is set to the type number.

When the code tries to set the variable’s value to string. The compiler throws an error as the variable’s type is already set to number.

It will produce the following output −

error TS2011: Cannot convert 'string' to 'number'.

*/