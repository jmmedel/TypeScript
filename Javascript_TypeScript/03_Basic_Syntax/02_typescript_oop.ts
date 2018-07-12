


/* 

TypeScript and Object Orientation
TypeScript is Object-Oriented JavaScript. Object Orientation is a software development paradigm that follows real-world modelling. Object Orientation considers a program as a collection of objects that communicate with each other via mechanism called methods. TypeScript supports these object oriented components too.

Object − An object is a real time representation of any entity. According to Grady Brooch, every object must have three features −

State − described by the attributes of an object

Behavior − describes how the object will act

Identity − a unique value that distinguishes an object from a set of similar such objects.

Class − A class in terms of OOP is a blueprint for creating objects. A class encapsulates data for the object.

Method − Methods facilitate communication between objects.

Example: TypeScript and Object Orientation

*/


class Greeting { 
    greet():void { 
       console.log("Hello World!!!") 
    } 
 } 
 var obj = new Greeting(); 
 obj.greet();

 /* 
 The above example defines a class Greeting. The class has a method greet (). The method prints the string “Hello World” on the terminal. The new keyword creates an object of the class (obj). The object invokes the method greet ().

On compiling, it will generate following JavaScript code.
*/