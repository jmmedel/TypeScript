

/* 

TypeScript - String replace()
Advertisements
 Previous Page Next Page  
This method finds a match between a regular expression and a string, and replaces the matched substring with a new substring.

The replacement string can include the following special replacement patterns −

Pattern	Inserts
$$	Inserts a "$".
$&	Inserts the matched substring.
$`	Inserts the portion of the string that precedes the matched substring.
$'	Inserts the portion of the string that follows the matched substring.
$n or $nn	Where n or nn are decimal digits, inserts the nth parenthesized submatch string, provided the first argument was a RegExp object.
Syntax
string.replace(regexp/substr, newSubStr/function[, flags]);
Argument Details
regexp − A RegExp object. The match is replaced by the return value of parameter #2.

substr − A String that is to be replaced by newSubStr.

newSubStr − The String that replaces the substring received from parameter #1.

function − A function to be invoked to create the new substring.

flags − A String containing any combination of the RegExp flags: g

Return Value
It simply returns a new changed string.

Example


*/

var re = /apples/gi; 
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace(re, "oranges"); 
console.log(newstr)


/* 

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

oranges are round, and oranges are juicy.

*/

var re = /(\w+)\s(\w+)/; 
var str = "zara ali"; 
var newstr = str.replace(re, "$2, $1"); 
console.log(newstr);

/* 

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

ali, zara

*/
