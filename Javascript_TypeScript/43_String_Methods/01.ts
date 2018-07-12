


/* 

TypeScript - String charAt()

charAt() is a method that returns the character from the specified index. Characters in a string are indexed from left to right. The index of the first character is 0, and the index of the last character in a string, called stringName, is stringName.length – 1.

Syntax
string.charAt(index);
Argument Details
index − An integer between 0 and 1 less than the length of the string.

*/

var str = new String("This is string"); 
console.log("str.charAt(0) is:" + str.charAt(0)); 
console.log("str.charAt(1) is:" + str.charAt(1)); 
console.log("str.charAt(2) is:" + str.charAt(2)); 
console.log("str.charAt(3) is:" + str.charAt(3)); 
console.log("str.charAt(4) is:" + str.charAt(4)); 
console.log("str.charAt(5) is:" + str.charAt(5));


/*

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

str.charAt(0) is:T 
str.charAt(1) is:h 
str.charAt(2) is:i 
str.charAt(3) is:s 
str.charAt(4) is:
str.charAt(5) is:i

*/