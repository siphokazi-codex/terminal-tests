module.exports = function countAllFromTown(town, reg){
  
  var regList = []; 
  var splitTown = town.split(',');

  for (var i=0; i<splitTown.length; i++){
      var townTrim = splitTown[i].trim();
  
	if (townTrim.startsWith(reg)){
  	regList.push(townTrim);
      
 }
      
    	console.log(regList);  
 }
	return regList.length;
  
}

 
