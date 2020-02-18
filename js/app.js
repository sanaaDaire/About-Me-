'use strict'
var human = prompt("Please enter your name", "Sana");
if (human != null) {
  alert("hello   " + human + "   how are you today?");
}
console.log(human);
var country = prompt("Are you from jordan ? (yes or no)").toLowerCase();
if (country == "yes") {
  alert("I'm from jordan too , I really like u are in my page  ");
} else if (country == "no") {
  alert("I'm so excited to enter my web page   ");
} /*else while (jordan !== "yes" && jordan !== "no");
{
  var jordan = prompt("Are you from jordan ? (yes or no)");
}*/
console.log(country);
var age = prompt("tell me how old are you ?");
if (age >= 18) {
  alert("I'm also above 18 , I'm 23  ");
} else {
  alert(" you are not adult yes so be carefull when you use the internet  ");
}
console.log(age);
var wish = prompt("do you want to be asoftware engineer like me ? (yes or no) ").toLowerCase();
if (wish == "yes") {
  alert("i advice u to study it if yr intersting in saling or maintenance  ");
} else if (wish == "no") {
  alert("I advice u to study coding   ");
}
console.log(wish);
var swim = prompt("tell me do u like swiming  ? (yes or no )").toLowerCase();
if (swim == "yes") {
  alert(" you are like me  ");
} else if (swim == "no") {
  alert("oooh why , its the way to get the stress out   ");
}
console.log(swim);

