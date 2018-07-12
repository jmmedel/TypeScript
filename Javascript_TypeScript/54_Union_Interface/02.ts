


/* 

Interfaces and Arrays
Interface can define both the kind of key an array uses and the type of entry it contains. Index can be of type string or type number.

Example

*/

interface namelist { 
    [index:number]:string 
 } 
 
 var list2:namelist = ["John",1,"Bran"] //Error. 1 is not type string  
 interface ages { 
    [index:string]:number 
 } 
 
 var agelist:ages; 
 agelist["John"] = 15   // Ok 
 agelist[2] = "nine"   // Error
 