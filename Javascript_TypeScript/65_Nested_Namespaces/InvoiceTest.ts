

/// <reference path = "Invoice.ts" />

var invoice = new tutorialPoint.invoiceApp.Invoice(); 
console.log(invoice.calculateDiscount(500));

/* 

The above code can be compiled and executed using the following command −

tsc --out app.js InvoiceTest.ts 
node app.js
On compiling, it will generate following JavaScript code(app.js).

*/