


/* 

Data Hiding
A class can control the visibility of its data members to members of other classes. This capability is termed as Data Hiding or Encapsulation.

Object Orientation uses the concept of access modifiers or access specifiers to implement the concept of Encapsulation. The access specifiers/modifiers define the visibility of a class’s data members outside its defining class.

The access modifiers supported by TypeScript are −

S.No.	Access Specifier & Description
1.	
public

A public data member has universal accessibility. Data members in a class are public by default.

2.	
private

Private data members are accessible only within the class that defines these members. If an external class member tries to access a private member, the compiler throws an error.

3.	
protected

A protected data member is accessible by the members within the same class as that of the former and also by the members of the child classes.


*/

class Encapsulate { 
    str:string = "hello" 
    private str2:string = "world" 
 }
  
 var obj = new Encapsulate() 
 console.log(obj.str)     //accessible 
 console.log(obj.str2)   //compilation Error as str2 is private

 /* 
 
 The class has two string attributes, str1 and str2, which are public and private members respectively. The class is instantiated. The example returns a compile time error, as the private attribute str2 is accessed outside the class that declares it.
 
 */