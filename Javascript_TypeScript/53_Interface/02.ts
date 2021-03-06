


/* 

Declaring Interfaces
The interface keyword is used to declare an interface. Here is the syntax to declare an interface −

Syntax
interface interface_name { 
}
Example: Interface and Objects

*/

interface IPerson { 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
 } 
 
 var customer:IPerson = { 
    firstName:"Tom",
    lastName:"Hanks", 
    sayHi: ():string =>{return "Hi there"} 
 } 
 
 console.log("Customer Object ") 
 console.log(customer.firstName) 
 console.log(customer.lastName) 
 console.log(customer.sayHi())  
 
 var employee:IPerson = { 
    firstName:"Jim",
    lastName:"Blakes", 
    sayHi: ():string =>{return "Hello!!!"} 
 } 
   
 console.log("Employee  Object ") 
 console.log(employee.firstName) 
 console.log(employee.lastName)



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



Interfaces are not to be converted to JavaScript. It’s just part of TypeScript. If you see the screen shot of TS Playground tool there is no java script emitted when you declare an interface unlike a class. So interfaces have zero runtime JavaScript impact.

 */