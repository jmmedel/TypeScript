/*

Example: NaN

*/
var month = 0;
if (month <= 0 || month > 12) {
    month = Number.NaN;
    console.log("Month is " + month);
}
else {
    console.log("Value Accepted..");
}
/*

On compiling, it will generate the same code in JavaScript.

Its output is as follows −

Month is NaN

*/
