module.exports = function countRegNumber(registration) {

  var regSpilt = registration.split(",");
  var regCount = regSpilt.length;
  console.log(regCount);
  return regCount;
}


