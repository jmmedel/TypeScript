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
var tutorialPoint;
(function (tutorialPoint) {
    var invoiceApp;
    (function (invoiceApp) {
        var Invoice = /** @class */ (function () {
            function Invoice() {
            }
            Invoice.prototype.calculateDiscount = function (price) {
                return price * .40;
            };
            return Invoice;
        }());
        invoiceApp.Invoice = Invoice;
    })(invoiceApp = tutorialPoint.invoiceApp || (tutorialPoint.invoiceApp = {}));
})(tutorialPoint || (tutorialPoint = {}));
/// <reference path = "Invoice.ts" />
var invoice = new tutorialPoint.invoiceApp.Invoice();
console.log(invoice.calculateDiscount(500));
/*

The above code can be compiled and executed using the following command −

tsc --out app.js InvoiceTest.ts
node app.js
On compiling, it will generate following JavaScript code(app.js).

*/ 



/*

//Generated by typescript 1.8.10
var tutorialPoint;
(function (tutorialPoint) {
   var invoiceApp;
   (function (invoiceApp) {
      var Invoice = (function () {
         function Invoice() {
         }
         Invoice.prototype.calculateDiscount = function (price) {
            return price * .40;
         };
         return Invoice;
      }());
      invoiceApp.Invoice = Invoice;
   })(invoiceApp = tutorialPoint.invoiceApp || (tutorialPoint.invoiceApp = {}));
	
})(tutorialPoint || (tutorialPoint = {}));
/// <reference path = "Invoice.ts" />

var invoice = new tutorialPoint.invoiceApp.Invoice();
console.log(invoice.calculateDiscount(500));
When the above code is compiled and executed, it produces the following result −

200

*/