


/* 

TypeScript - Functions
Advertisements
 Previous Page Next Page  
Functions are the building blocks of readable, maintainable, and reusable code. A function is a set of statements to perform a specific task. Functions organize the program into logical blocks of code. Once defined, functions may be called to access code. This makes the code reusable. Moreover, functions make it easy to read and maintain the program’s code.

A function declaration tells the compiler about a function's name, return type, and parameters. A function definition provides the actual body of the function.

Sr.No	Funtions & Description
1.	Defining a Function
A function definition specifies what and how a specific task would be done.

2.	Calling a Function
A function must be called so as to execute it.

3.	Returning Functions
Functions may also return value along with control, back to the caller.

4.	Parameterized Function
Parameters are a mechanism to pass values to functions.

Optional Parameters
Optional parameters can be used when arguments need not be compulsorily passed for a function’s execution. A parameter can be marked optional by appending a question mark to its name. The optional parameter should be set as the last argument in a function. The syntax to declare a function with optional parameter is as given below −

function function_name (param1[:type], param2[:type], param3[:type])
Example: Optional Parameters
function disp_details(id:number,name:string,mail_id?:string) { 
   console.log("ID:", id); 
   console.log("Name",name); 
   
   if(mail_id!=undefined)  
   console.log("Email Id",mail_id); 
}
disp_details(123,"John");
disp_details(111,"mary","mary@xyz.com");
The above example declares a parameterized function. Here, the third parameter, i.e., mail_id is an optional parameter.

If an optional parameter is not passed a value during the function call, the parameter’s value is set to undefined.

The function prints the value of mail_id only if the argument is passed a value.

On compiling, it will generate following JavaScript code −

//Generated by typescript 1.8.10
function disp_details(id, name, mail_id) {
   console.log("ID:", id);
   console.log("Name", name);
	
   if (mail_id != undefined)
      console.log("Email Id", mail_id);
}
disp_details(123, "John");
disp_details(111, "mary", "mary@xyz.com");
The above code will produce the following output −

ID:123 
Name John 
ID: 111 
Name  mary 
Email Id mary@xyz.com
Rest Parameters
Rest parameters are similar to variable arguments in Java. Rest parameters don’t restrict the number of values that you can pass to a function. However, the values passed must all be of the same type. In other words, rest parameters act as placeholders for multiple arguments of the same type.

To declare a rest parameter, the parameter name is prefixed with three periods. Any nonrest parameter should come before the rest parameter.

Example: Rest Parameters
function addNumbers(...nums:number[]) {  
   var i;   
   var sum:number = 0; 
   
   for(i = 0;i<nums.length;i++) { 
      sum = sum + nums[i]; 
   } 
   console.log("sum of the numbers",sum) 
} 
addNumbers(1,2,3) 
addNumbers(10,10,10,10,10)
The function addNumbers() declaration, accepts a rest parameter nums. The rest parameter’s data type must be set to an array. Moreover, a function can have at the most one rest parameter.

The function is invoked twice, by passing three and six values, respectively.

The for loop iterates through the argument list, passed to the function and calculates their sum.

On compiling, it will generate following JavaScript code −

function addNumbers() {
   var nums = [];
   for (var _i = 0; _i < arguments.length; _i++) {
      nums[_i - 0] = arguments[_i];
   }
	var i;
   var sum = 0;
	
   for (i = 0; i < nums.length; i++) {
      sum = sum + nums[i];
   }
   console.log("sum of the numbers", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10, 10);
The output of the above code is as follows −

sum of numbers 6 
sum of numbers 50
Default Parameters
Function parameters can also be assigned values by default. However, such parameters can also be explicitly passed values.

Syntax
function function_name(param1[:type],param2[:type] = default_value) { 
}
Note − A parameter cannot be declared optional and default at the same time.

Example: Default parameters
function calculate_discount(price:number,rate:number = 0.50) { 
   var discount = price * rate; 
   console.log("Discount Amount: ",discount); 
} 
calculate_discount(1000) 
calculate_discount(1000,0.30)
On compiling, it will generate following JavaScript code −

//Generated by typescript 1.8.10
function calculate_discount(price, rate) {
   if (rate === void 0) { rate = 0.50; }
   var discount = price * rate;
   console.log("Discount Amount: ", discount);
}
calculate_discount(1000);
calculate_discount(1000, 0.30);
Its output is as follows −

Discount amount : 500 
Discount amount : 300
The example declares the function, calculate_discount. The function has two parameters - price and rate.

The value of the parameter rate is set to 0.50 by default.

The program invokes the function, passing to it only the value of the parameter price. Here, the value of rate is 0.50 (default)

The same function is invoked, but with two arguments. The default value of rate is overwritten and is set to the value explicitly passed.

Anonymous Function
Functions that are not bound to an identifier (function name) are called as anonymous functions. These functions are dynamically declared at runtime. Anonymous functions can accept inputs and return outputs, just as standard functions do. An anonymous function is usually not accessible after its initial creation.

Variables can be assigned an anonymous function. Such an expression is called a function expression.

Syntax
var res = function( [arguments] ) { ... }
Example ─ A Simple Anonymous function
var msg = function() { 
   return "hello world";  
} 
console.log(msg())
On compiling, it will generate the same code in JavaScript.

It will produce the following output −

hello world
Example ─ Anonymous function with parameters
var res = function(a:number,b:number) { 
   return a*b;  
}; 
console.log(res(12,2)) 
The anonymous function returns the product of the values passed to it.

On compiling, it will generate following JavaScript code −

//Generated by typescript 1.8.10
var res = function (a, b) {
   return a * b;
};
console.log(res(12, 2));
The output of the above code is as follows −

24
Function Expression and Function Declaration ─ Are they synonymous?
Function expression and function declaration are not synonymous. Unlike a function expression, a function declaration is bound by the function name.

The fundamental difference between the two is that, function declarations are parsed before their execution. On the other hand, function expressions are parsed only when the script engine encounters it during execution.

When the JavaScript parser sees a function in the main code flow, it assumes Function Declaration. When a function comes as a part of a statement, it is a Function Expression.

The Function Constructor
TypeScript also supports defining a function with the built-in JavaScript constructor called Function ().

Syntax
var res = new Function( [arguments] ) { ... }.
Example
var myFunction = new Function("a", "b", "return a * b"); 
var x = myFunction(4, 3); 
console.log(x);
The new Function() is a call to the constructor which in turn creates and returns a function reference.

On compiling, it will generate the same code in JavaScript.

The output of the above example code is as follows −

12 
Recursion and TypeScript Functions
Recursion is a technique for iterating over an operation by having a function call to itself repeatedly until it arrives at a result. Recursion is best applied when you need to call the same function repeatedly with different parameters from within a loop.

Example – Recursion
function factorial(number) {
   if (number <= 0) {         // termination case
      return 1; 
   } else {     
      return (number * factorial(number - 1));     // function invokes itself
   } 
}; 
console.log(factorial(6));      // outputs 720 
On compiling, it will generate the same code in JavaScript.

Here is its output −

720
Example: Anonymous Recursive Function
(function () { 
   var x = "Hello!!";   
   console.log(x)     
})()      // the function invokes itself using a pair of parentheses ()
On compiling, it will generate the same code in JavaScript.

Its output is as follows −

Hello!!
Lambda Functions
Lambda refers to anonymous functions in programming. Lambda functions are a concise mechanism to represent anonymous functions. These functions are also called as Arrow functions.

Lambda Function - Anatomy
There are 3 parts to a Lambda function −

Parameters − A function may optionally have parameters

The fat arrow notation/lambda notation (=>) − It is also called as the goes to operator

Statements − represent the function’s instruction set

Tip − By convention, the use of single letter parameter is encouraged for a compact and precise function declaration.

Lambda Expression
It is an anonymous function expression that points to a single line of code. Its syntax is as follows −

( [param1, parma2,…param n] )=>statement;
Example: Lambda Expression
var foo = (x:number)=>10 + x 
console.log(foo(100))      //outputs 110 
The program declares a lambda expression function. The function returns the sum of 10 and the argument passed.

On compiling, it will generate following JavaScript code.

//Generated by typescript 1.8.10
var foo = function (x) { return 10 + x; };
console.log(foo(100));      //outputs 110
Here is the output of the above code −

110
Lambda Statement
Lambda statement is an anonymous function declaration that points to a block of code. This syntax is used when the function body spans multiple lines. Its syntax is as follows −

( [param1, parma2,…param n] )=> {
 
   //code block
}
Example: Lambda statement
var foo = (x:number)=> {    
   x = 10 + x 
   console.log(x)  
} 
foo(100)
The function’s reference is returned and stored in the variable foo.

On compiling, it will generate following JavaScript code −

//Generated by typescript 1.8.10
var foo = function (x) {
   x = 10 + x;
   console.log(x);
};
foo(100);
The output of the above program is as follows −

110
Syntactic Variations
Parameter type Inference
It is not mandatory to specify the data type of a parameter. In such a case the data type of the parameter is any. Let us take a look at the following code snippet −

var func = (x)=> { 
   if(typeof x=="number") { 
      console.log(x+" is numeric") 
   } else if(typeof x=="string") { 
      console.log(x+" is a string") 
   }  
} 
func(12) 
func("Tom")
On compiling, it will generate the following JavaScript code −

//Generated by typescript 1.8.10
var func = function (x) {
   if (typeof x == "number") {
      console.log(x + " is numeric");
   } else if (typeof x == "string") {
      console.log(x + " is a string");
   }
};
func(12);
func("Tom");
Its output is as follows −

12 is numeric 
Tom is a string
Optional parentheses for a single parameter
var display = x=> { 
   console.log("The function got "+x) 
} 
display(12)
On compiling, it will generate following JavaScript code −

//Generated by typescript 1.8.10
var display = function (x) {
   console.log("The function got " + x);
};
display(12);
Its output is as follows −

The function got 12
Optional braces for a single statement, Empty parentheses for no parameter
The following example shows these two Syntactic variations.

var disp =()=> { 
   console.log("Function invoked"); 
} 
disp();
On compiling, it will generate following JavaScript code −

//Generated by typescript 1.8.10
var disp = function () {
   console.log("Function invoked");
};
disp();
Its output is as follows −

Function invoked
Function Overloads
Functions have the capability to operate differently on the basis of the input provided to them. In other words, a program can have multiple methods with the same name with different implementation. This mechanism is termed as Function Overloading. TypeScript provides support for function overloading.

To overload a function in TypeScript, you need to follow the steps given below −

Step 1 − Declare multiple functions with the same name but different function signature. Function signature includes the following.

The data type of the parameter

function disp(string):void; 
function disp(number):void;
The number of parameters

function disp(n1:number):void; 
function disp(x:number,y:number):void;
The sequence of parameters

function disp(n1:number,s1:string):void; 
function disp(s:string,n:number):void;
Note − The function signature doesn’t include the function’s return type.

Step 2 − The declaration must be followed by the function definition. The parameter types should be set to any if the parameter types differ during overload. Additionally, for case b explained above, you may consider marking one or more parameters as optional during the function definition.

Step 3 − Finally, you must invoke the function to make it functional.

Example
Let us now take a look at the following example code −

function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 

function disp(x:any,y?:any):void { 
   console.log(x); 
   console.log(y); 
} 
disp("abc") 
disp(1,"xyz");
The first two lines depict the function overload declaration. The function has two overloads −

Function that accepts a single string parameter.

Function that accepts two values of type number and string respectively.

The third line defines the function. The data type of the parameters are set to any. Moreover, the second parameter is optional here.

The overloaded function is invoked by the last two statements.

On compiling, it will generate following JavaScript code −

//Generated by typescript 1.8.10
function disp(x, y) {
   console.log(x);
   console.log(y);
}
disp("abc");
disp(1, "xyz");
The above code will produce the following output −

abc 
1 
xyz 

*/