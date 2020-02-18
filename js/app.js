'use strict'
var human = prompt('Please enter your name', 'Sana');
if (human != null) {
  alert('hello   ' + human + '   how are you today?');
}
console.log(human);
var know = prompt('Hey! Do you know me ? (yes or no)').toLowerCase();
if (know == 'yes') {
  alert('Amazing! welcome in my site');
} else if (know == 'no') {
  alert('im so excited to enter my web page ');
} /*else while (jordan !== "yes" && jordan !== "no");
{
  var jordan = prompt("Are you from jordan ? (yes or no)");
}*/
console.log(know);
var age = prompt('tell me how old are you ?');
if (age >= 18) {
  alert(' Iam 23');
} else {
  alert(' Enjoy you are young ');
}
console.log(age);
var wish = prompt('do you want to be asoftware engineer like me ? (yes or no) ').toLowerCase();
if (wish == 'yes') {
  alert('i advice u to study it if yr intersting in saling or maintenance  ');
} else if (wish == 'no') {
  alert('I advice u to study coding ');
}
console.log(wish);
var swim = prompt('tell me do u like swiming  ? (yes or no )').toLowerCase();
if (swim == 'yes') {
  alert(' you are like me');
} else if (swim == 'no') {
  alert('oops! it is amazing try it ');
}
console.log(swim);

