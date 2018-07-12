


/* 

A namespace is a way to logically group related code. This is inbuilt into TypeScript unlike in JavaScript where variables declarations go into a global scope and if multiple JavaScript files are used within same project there will be possibility of overwriting or misconstruing the same variables, which will lead to the “global namespace pollution problem” in JavaScript.

Defining a Namespace
A namespace definition begins with the keyword namespace followed by the namespace name as follows −

namespace SomeNameSpaceName { 
   export interface ISomeInterfaceName {      }  
   export class SomeClassName {      }  
} 
The classes or interfaces which should be accessed outside the namespace should be marked with keyword export.

To access the class or interface in another namespace, the syntax will be namespaceName.className

SomeNameSpaceName.SomeClassName;
If the first namespace is in separate TypeScript file, then it should be referenced using triple slash reference syntax.

/// <reference path = "SomeFileName.ts" />
The following program demonstrates use of namespaces −

*/