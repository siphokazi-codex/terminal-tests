module.exports = function countAllPaarl(reg){

var splitRegNumber = reg.split(', ');
 console.log(splitRegNumber);
var isPaarl = [];
var counter = 0;
  
  for (var i=0; i<splitRegNumber.length; i++){
    
	if (splitRegNumber[i].startsWith('CJ')){
    	isPaarl.push(splitRegNumber[i]);
      	//counter += isPaarl[i];
    }
      
    	 
  }	
  	console.log(isPaarl.length); 
	return isPaarl.length;
  
}


  
 
    


