/*

Array Traversal using for…in loop
One can use the for…in loop to traverse through an array.

*/
var j;
var nums = [1001, 1002, 1003, 1004];
for (j in nums) {
    console.log(nums[j]);
}
/*

The loop performs an index based array traversal.

On compiling, it will generate following JavaScript code.

//Generated by typescript 1.8.10
var j;
var nums = [1001, 1002, 1003, 1004];

for (j in nums) {
   console.log(nums[j]);
}


The output of the above code is given below −

1001
1002
1003
1004


*/ 
