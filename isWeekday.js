module.exports = function isWeekday (day) {

var weekend = day.startsWith('S');
var weekday =! day.startsWith('S');

console.log(weekday);
return weekday;

}
