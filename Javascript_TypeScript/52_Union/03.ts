


/* 

Union Type and Arrays
Union types can also be applied to arrays, properties and interfaces. The following illustrates the use of union type with an array.

Example: Union Type and Array


*/

var arr:number[]|string[]; 
var i:number; 
arr = [1,2,4] 
console.log("**numeric array**")  

for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
}  

arr = ["Mumbai","Pune","Delhi"] 
console.log("**string array**")  

for(i = 0;i<arr.length;i++) { 
   console.log(arr[i]) 
} 

/* 

The program declares an array. The array can represent either a numeric collection or a string collection.

On compiling, it will generate following JavaScript code.

//Generated by typescript 1.8.10
var arr;
var i;
arr = [1, 2, 4];
console.log("**numeric array**");

for (i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
arr = ["Mumbai", "Pune", "Delhi"];
console.log("**string array**");

for (i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
Its output is as follows −

**numeric array** 
1 
2 
4 
**string array** 
Mumbai 
Pune 
Delhi

*/
