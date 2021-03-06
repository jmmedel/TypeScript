/*

Example: Array Constructor accepts comma separated values

*/
var names = new Array("Mary", "Tom", "Jack", "Jill");
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
/*

On compiling, it will generate following JavaScript code −

//Generated by typescript 1.8.10
var names = new Array("Mary", "Tom", "Jack", "Jill");
for (var i = 0; i < names.length; i++) {
   console.log(names[i]);
}
Its output is as follows −

Mary
Tom
Jack
Jill


*/
