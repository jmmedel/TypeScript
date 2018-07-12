


/* 

Creating Instance objects
To create an instance of the class, use the new keyword followed by the class name. The syntax for the same is given below −

Syntax
var object_name = new class_name([ arguments ])
The new keyword is responsible for instantiation.

The right-hand side of the expression invokes the constructor. The constructor should be passed values if it is parameterized.

Example: Instantiating a class

*/

class Car{
    constructor(msg){
        console.log(msg)
    }
}
var obj = new Car("Engine 1")
