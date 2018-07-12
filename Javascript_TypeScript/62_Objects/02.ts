


/* 

TypeScript Type Template
Let’s say you created an object literal in JavaScript as −

var person = { 
   firstname:"Tom", 
   lastname:"Hanks" 
};
In case you want to add some value to an object, JavaScript allows you to make the necessary modification. Suppose we need to add a function to the person object later this is the way you can do this.

person.sayHello = function(){ return "hello";}
If you use the same code in Typescript the compiler gives an error. This is because in Typescript, concrete objects should have a type template. Objects in Typescript must be an instance of a particular type.

You can solve this by using a method template in declaration.

Example: Typescript Type template


*/

var person = {
    firstName:"Tom", 
    lastName:"Hanks", 
    sayHello:function() {  }  //Type template 
 } 
 person.sayHello = function() {  
    console.log("hello "+person.firstName)
 }  
 person.sayHello()


 /* 
 
 On compiling, it will generate the same code in JavaScript.

The output of the above code is as follows −

hello Tom
Objects can also be passed as parameters to function.
 */