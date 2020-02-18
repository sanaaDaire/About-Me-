'use strict'
var human = prompt('Please enter your name', 'Sana');
if (human != null) {
  alert('hello   ' + human + '   how are you today?');
}
//console.log(human);
var know = prompt('Hey! Do you know me ? (yes or no)').toLowerCase();
if (know === 'yes' || know === 'y') {
  alert('Amazing! welcome in my site');
} else if (know === 'no' || know === 'n') {
  alert('im so excited to enter my web page ');
} /*else while (jordan !== "yes" && jordan !== "no");
{
  var jordan = prompt("Are you from jordan ? (yes or no)");
}*/
//console.log(know);
var age = prompt('Are you Above 18 ? (yes or no)').toLowerCase();
if (age === 'yes' || age ==='y') {
  alert(' Iam above 18 also');
} else if (age  === 'no' || age === 'n') {
  alert(' Enjoy you are young ');
}
//console.log(age);
var wish = prompt('do you want to be asoftware engineer like me ? (yes or no) ').toLowerCase();
if (wish === 'yes' || wish === 'y') {
  alert('i advice u to study it if yr intersting in saling or maintenance  ');
} else if (wish === 'no' || wish === 'n') {
  alert('I advice u to study coding ');
}
//console.log(wish);
var swim = prompt('tell me do u like swiming  ? (yes or no )').toLowerCase();
if (swim === 'yes' || swim === 'y') {
  alert(' you are like me');
} else if (swim === 'no' || swim === 'n') {
  alert('oops! it is amazing try it ');
}
//console.log(swim);

var food = prompt('Do you know whats my favourite food? (yes or no)').toLowerCase();
if (food === 'yes' || food === 'y') {
  alert(' GREAT!');
} else if (food === 'no' || food === 'n') {
  alert('HUMMM! i am in love with Burger ');
}
//console.log(food);

