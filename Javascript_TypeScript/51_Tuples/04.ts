


/* 

Tuple Operations
Tuples in TypeScript supports various operations like pushing a new item, removing an item from the tuple, etc.

Example

*/

var mytuple = [10,"Hello","World","typeScript"]; 
console.log("Items before push "+mytuple.length)    // returns the tuple size 

mytuple.push(12)                                    // append value to the tuple 
console.log("Items after push "+mytuple.length) 
console.log("Items before pop "+mytuple.length) 
console.log(mytuple.pop()+" popped from the tuple") // removes and returns the last item
  
console.log("Items after pop "+mytuple.length)

/* 

The push() appends an item to the tuple

The pop() removes and returns the last value in the tuple

On compiling, it will generate the same code in JavaScript.

The output of the above code is as follows −

Items before push 4 
Items after push 5 
Items before pop 5 
12 popped from the tuple 
Items after pop 4

*/

