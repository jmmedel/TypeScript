/*

Declaring Interfaces
The interface keyword is used to declare an interface. Here is the syntax to declare an interface −

Syntax
interface interface_name {
}
Example: Interface and Objects

*/
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () { return "Hi there"; }
};
console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () { return "Hello!!!"; }
};
console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);
/*

The example defines an interface. The customer object is of the type IPerson. Hence, it will now be binding on the object to define all properties as specified by the interface.

Another object with following signature, is still considered as IPerson because that object is treated by its size or signature.

On compiling, it will generate following JavaScript code.

//Generated by typescript 1.8.10
var customer = { firstName: "Tom", lastName: "Hanks",
  sayHi: function () { return "Hi there"; }
};
console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());
var employee = { firstName: "Jim", lastName: "Blakes",
  sayHi: function () { return "Hello!!!"; } };

console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);
The output of the above example code is as follows −

Customer object
Tom
Hanks
Hi there
Employee  object
Jim
Blakes
Hello!!!

*/ 
