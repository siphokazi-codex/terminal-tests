module.exports = function regCheck(reg, prov){

  var isGP = reg.endsWith(prov);
//  console.log(isGP);

  return isGP;

}


