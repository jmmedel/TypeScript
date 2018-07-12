

/* 

Classes and Interfaces
Classes can also implement interfaces.


*/

interface ILoan { 
    interest:number 
 } 
 
 class AgriLoan implements ILoan { 
    interest:number 
    rebate:number 
    
    constructor(interest:number,rebate:number) { 
       this.interest = interest 
       this.rebate = rebate 
    } 
 } 
 
 var obj = new AgriLoan(10,1) 
 console.log("Interest is : "+obj.interest+" Rebate is : "+obj.rebate )


 /*
 
 The class AgriLoan implements the interface Loan. Hence, it is now binding on the class to include the property interest as its member.

On compiling, it will generate following JavaScript code.

//Generated by typescript 1.8.10
var AgriLoan = (function () {
   function AgriLoan(interest, rebate) {
      this.interest = interest;
      this.rebate = rebate;
   }
   return AgriLoan;
}());

var obj = new AgriLoan(10, 1);
console.log("Interest is : " + obj.interest + " Rebate is : " + obj.rebate);
The output of the above code is as follows −

Interest is : 10 Rebate is : 1
 
 */