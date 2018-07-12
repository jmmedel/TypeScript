


/* 

TypeScript Variable Scope
The scope of a variable specifies where the variable is defined. The availability of a variable within a program is determined by its scope. TypeScript variables can be of the following scopes −

Global Scope − Global variables are declared outside the programming constructs. These variables can be accessed from anywhere within your code.

Class Scope − These variables are also called fields. Fields or class variables are declared within the class but outside the methods. These variables can be accessed using the object of the class. Fields can also be static. Static fields can be accessed using the class name.

Local Scope − Local variables, as the name suggests, are declared within the constructs like methods, loops etc. Local variables are accessible only within the construct where they are declared.

The following example illustrates variable scopes in TypeScript.

Example: Variable Scope


*/

var global_num = 12          //global variable 
class Numbers { 
   num_val = 13;             //class variable 
   static sval = 10;         //static field 
   
   storeNum():void { 
      var local_num = 14;    //local variable 
   } 
} 
console.log("Global num: "+global_num)  
console.log(Numbers.sval)   //static variable  
var obj = new Numbers(); 
console.log("Global num: "+obj.num_val) 


/* 

On transpiling, the following JavaScript code is generated −

var global_num = 12;              //global variable 
var Numbers = (function () {
   function Numbers() {
      this.num_val = 13;          //class variable 
   }
   Numbers.prototype.storeNum = function () {
      var local_num = 14;        //local variable 
   };
   Numbers.sval = 10;            //static field 
   return Numbers;
}());

console.log("Global num: " + global_num);
console.log(Numbers.sval);       //static variable  

var obj = new Numbers();
console.log("Global num: " + obj.num_val);
It will produce the following output −

Global num: 12
10
Global num: 13
If you try accessing the local variable outside the method, it results in a compilation error.

error TS2095: Could not find symbol 'local_num'.

*/