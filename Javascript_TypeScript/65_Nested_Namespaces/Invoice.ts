


/* 

Nested Namespaces
You can define one namespace inside another namespace as follows −

namespace namespace_name1 { 
   export namespace namespace_name2 {
      export class class_name {    } 
   } 
}
You can access members of nested namespace by using the dot (.) operator as follows −

*/

namespace tutorialPoint { 
    export namespace invoiceApp { 
       export class Invoice { 
          public calculateDiscount(price: number) { 
             return price * .40; 
          } 
       } 
    } 
 } 
