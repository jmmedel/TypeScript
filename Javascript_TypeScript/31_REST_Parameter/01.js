/*

Rest Parameters
Rest parameters are similar to variable arguments in Java. Rest parameters don’t restrict the number of values that you can pass to a function. However, the values passed must all be of the same type. In other words, rest parameters act as placeholders for multiple arguments of the same type.

To declare a rest parameter, the parameter name is prefixed with three periods. Any nonrest parameter should come before the rest parameter.

Example: Rest Parameters

*/
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
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
/*
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

*/ 
