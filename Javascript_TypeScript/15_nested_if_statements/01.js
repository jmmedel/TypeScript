/*

TypeScript - Nested if statement
Advertisements
 Previous Page Next Page
The else…if ladder is useful to test multiple conditions. Its syntax is given below −

Syntax
if (boolean_expression1) {
   //statements if the expression1 evaluates to true
} else if (boolean_expression2) {
   //statements if the expression2 evaluates to true
} else {
   //statements if both expression1 and expression2 result to false
}
When using if…else…if and else statements, there are a few points to keep in mind.

An if can have zero or one else's and it must come after any else..if's.

An if can have zero to many else..if's and they must come before the else.

Once an else..if succeeds, none of the remaining else..if's or else's will be tested.

Example: else…if ladder


*/
var num = 2;
if (num > 0) {
    console.log(num + " is positive");
}
else if (num < 0) {
    console.log(num + " is negative");
}
else {
    console.log(num + " is neither positive nor negative");
}
