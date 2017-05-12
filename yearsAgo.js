module.exports = function yearsAgo(year) {

//var ago = new Date(year);
var date = new Date();
var years = date.getFullYear() - year;

console.log(years);
//console.log("It was " + yearsAgo + " years ago");
  return years;
}

