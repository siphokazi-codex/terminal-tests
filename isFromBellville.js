module.exports = function isFromBellville (bvVehicle){

  var bvRegistration = bvVehicle.startsWith('CY')
  console.log(bvRegistration);

  return bvRegistration;
}
