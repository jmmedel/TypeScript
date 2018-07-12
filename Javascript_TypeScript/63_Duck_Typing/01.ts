


/*

Duck-typing
In duck-typing, two objects are considered to be of the same type if both share the same set of properties. Duck-typing verifies the presence of certain properties in the objects, rather than their actual type, to check their suitability. The concept is generally explained by the following phrase −

“When I see a bird that walks like a duck and swims like a duck and quacks like a duck, I call that bird a duck.”

The TypeScript compiler implements the duck-typing system that allows object creation on the fly while keeping type safety. The following example shows how we can pass objects that don’t explicitly implement an interface but contain all of the required members to a function.

Example

*/

interface IPoint { 
    x:number 
    y:number 
 } 
 function addPoints(p1:IPoint,p2:IPoint):IPoint { 
    var x = p1.x + p2.x 
    var y = p1.y + p2.y 
    return {x:x,y:y} 
 } 
 
 //Valid 
 var newPoint = addPoints({x:3,y:4},{x:5,y:1})  
 
 //Error 
 var newPoint2 = addPoints({x:1},{x:4,y:3})
 