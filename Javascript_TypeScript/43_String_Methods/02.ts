

/* 

TypeScript - String charCodeAt()
Advertisements
 Previous Page Next Page  
This method returns a number indicating the Unicode value of the character at the given index. Unicode code points range from 0 to 1,114,111. The first 128 Unicode code points are a direct match of the ASCII character encoding. charCodeAt()always returns a value that is less than 65,536.

Syntax
string.charCodeAt(index);
Argument Details
index − An integer between 0 and 1 less than the length of the string; if unspecified, defaults to 0.

Return Value
Returns a number indicating the Unicode value of the character at the given index. It returns NaN if the given index is not between 0 and 1 less than the length of the string.

Example

*/

var str = new String("This is string"); 
console.log("str.charAt(0) is:" + str.charCodeAt(0)); 
console.log("str.charAt(1) is:" + str.charCodeAt(1)); 
console.log("str.charAt(2) is:" + str.charCodeAt(2)); 
console.log("str.charAt(3) is:" + str.charCodeAt(3)); 
console.log("str.charAt(4) is:" + str.charCodeAt(4)); 
console.log("str.charAt(5) is:" + str.charCodeAt(5));

/* 

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

str.charAt(0) is:84 
str.charAt(1) is:104 
str.charAt(2) is:105 
str.charAt(3) is:115 
str.charAt(4) is:32 
str.charAt(5) is:105

*/