

/* 

TypeScript - Objects
Advertisements
 Previous Page Next Page  
An object is an instance which contains set of key value pairs. The values can be scalar values or functions or even array of other objects. The syntax is given below −

Syntax
var object_name = { 
   key1: “value1”, //scalar value 
   key2: “value”,  
   key3: function() {
      //functions 
   }, 
   key4:[“content1”, “content2”] //collection  
};
As shown above, an object can contain scalar values, functions and structures like arrays and tuples.

Example: Object Literal Notation

*/

var person = { 
    firstname:"Tom", 
    lastname:"Hanks" 
 }; 
 //access the object values 
 console.log(person.firstname) 
 console.log(person.lastname)

 /*
 
 On compiling, it will generate the same code in JavaScript.

The output of the above code is as follows −

Tom 
Hanks
 
 */