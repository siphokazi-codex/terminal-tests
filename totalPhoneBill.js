module.exports = function totalPhoneBill(bill){

var splitBill = bill.split(', ');
var billing = 0;

console.log(bill);

for (var i=0; i<splitBill.length; i++){

	if (splitBill[i] === "call" ){
    	billing = billing + 2.75;
 	}
   else if (splitBill[i] === "sms"){
     	billing = billing + 0.65;
   }

  }

   console.log("R"+billing.toFixed(2));
  return "R" + billing.toFixed(2);

 }
