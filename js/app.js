'use strict';
<<<<<<< HEAD
var score = 0;
function humanQuestion() {
  var human = prompt('Please enter your name');
  while (human === '') {
    human = prompt('Enter your name');
  }
  alert(' welcome  ' + human);
}
humanQuestion();
//console.log(human);
function knowQuestion() {
  var know = prompt('Hey! Do you know me ? (yes or no)').toLowerCase();
  while (know === '') {
    know = prompt('Please Answer');
  }
  if (know === 'yes' || know === 'y') {
    alert('Amazing! welcome in my site');
    score = score + 1;
  } else if (know === 'no' || know === 'n') {
    alert('im so excited to enter my web page ');
  }
}
knowQuestion();
//console.log(know);
function ageQuestion() {
  var age = prompt('DO you know my age ? (yes or no)').toLowerCase();
  while (age === '') {
    age = prompt('Please Answer');
  }
  if (age === 'yes' || age === 'y') {
    alert('YES! I am 23 ');
    score = score + 1;
  } else if (age === 'no' || age === 'n') {
    alert(' Enjoy you are young ');
  }
}
ageQuestion();
//console.log(age);
function wishQuestion() {
  var wish = prompt('do you know if i am study a software engineer  ? (yes or no) ').toLowerCase();
  while (wish === '') {
    wish = prompt('Please Answer');
  }
  if (wish === 'yes' || wish === 'y') {
    alert('i advice u to study it  ');
    score = score + 1;
  } else if (wish === 'no' || wish === 'n') {
    alert('I advice u to study coding ');
  }
}
wishQuestion();
//console.log(wish);
function swimQuestion() {
  var swim = prompt('tell me do u know if i like swiming  ? (yes or no )').toLowerCase();
  while (swim === '') {
    swim = prompt('Please Answer');
  }
  if (swim === 'yes' || swim === 'y') {
    alert(' you are like me');
    score = score + 1;
  } else if (swim === 'no' || swim === 'n') {
    alert('oops! it is amazing try it ');
  }
}
swimQuestion();
//console.log(swim);
function foodQuestion() {
  var food = prompt('Do you know whats my favourite food? (yes or no)').toLowerCase();
  while (food === '') {
    food = prompt('Please Answer');
  }
  if (food === 'yes' || food === 'y') {
    alert(' GREAT!');
    score = score + 1;
  } else if (food === 'no' || food === 'n') {
    alert('HUMMM! i am in love with Burger ');
  }
}
foodQuestion();
//console.log(food);
function age1Question() {
  for (var i = 0; i < 4; i++) {
    var age1 = prompt('Guess whats my age? ');
    age1 = Number(age1);
    if (age1 === 23) {
      alert(' you are correctly !!');
      score = score + 1;
      break;
    }
    if (age1 > 25 && age1 < 30) { alert(' high '); }
    if (age1 < 23 && age1 > 20) { alert(' low '); }
  }
}
age1Question();
//console.log(food);
function carQuestion() {
  var bestCar = ['bm', 'gclass', 'ford', 'jaguar', 'audi', 'rangerover'];
  var myFav = prompt(' Guess whats my favourite car?');
  var time = 0;
  for (var a = 0; a <= 5; a++) {
    for (var x = 0; x < 6; x++) {
      if (myFav === bestCar[x]) {
        alert(' you are correctly');
        score = score + 1;
      } else {
        time = time + 1;
        console.log(time, 'score', score);
      }
    }
    if (time === 6) {
      alert('try again');
      myFav = prompt(' Guess whats my favourite car?');
      time = 0;
    }
    else {
      break;
    }
  }document.write(bestCar);
}
carQuestion();
document.write(score);
=======
var score =0 ;

var human = function() {
  prompt('Please enter your name', 'Sana');
  if (human !== null) {
    alert('hello   ' + human + '   how are you today?');}
};
human();
//console.log(human);
var know = function(){ prompt('Hey! Do you know me ? (yes or no)').toLowerCase();
  if (know === 'yes' || know === 'y') {
    alert('Amazing! welcome in my site');
    score=score+1;
  } else if (know === 'no' || know === 'n') {
    alert('im so excited to enter my web page ');
  } };
know();
/*else while (jordan !== "yes" && jordan !== "no");
{
  var jordan = prompt("Are you from jordan ? (yes or no)");
}*/
//console.log(know);
var age = function(){ prompt('DO you think i am  Above 18 ? (yes or no)').toLowerCase();
  if (age === 'yes' || age ==='y') {
    alert('YES! Iam above 18 ');
    score=score+1;
  } else if (age === 'no' || age === 'n') {
    alert(' Enjoy you are young ');
  }};
age();
//console.log(age);
var wish = function(){ prompt('do you know if i am study a software engineer  ? (yes or no) ').toLowerCase();
  if (wish === 'yes' || wish === 'y') {
    alert('i advice u to study it  ');
    score=score+1;
  } else if (wish === 'no' || wish === 'n') {
    alert('I advice u to study coding ');
  }};
wish();
//console.log(wish);
var swim = function(){prompt('tell me do u know if i like swiming  ? (yes or no )').toLowerCase();
  if (swim === 'yes' || swim === 'y') {
    alert(' you are like me');
    score=score+1;
  } else if (swim === 'no' || swim === 'n') {
    alert('oops! it is amazing try it ');
  }};
swim();
//console.log(swim);

var food = function(){ prompt('Do you know whats my favourite food? (yes or no)').toLowerCase();
  if (food === 'yes' || food === 'y') {
    alert(' GREAT!');
    score=score+1;
  } else if (food === 'no' || food === 'n') {
    alert('HUMMM! i am in love with Burger ');
  }};
food();
//console.log(food);

var age1 = function(){
  for( var i =0; i <=3 ; i++) {
    prompt('Guess whats my age? ');
    age1= Number(age1);
    if ( age1 === 23 ) { alert ( ' you are correctly !!');
      score=score+1;
      break;
    }
    if ( age1 >=30 ) { alert ('too high '); }
    if ( age1 <=20 ) { alert ('too low '); }
    if ( age1 >25 && age1 <30 ) { alert (' high '); }
    if ( age1 <23 && age1 >20) { alert (' low '); }
  }};
age1();
//console.log(food);

var favMusic = function(){ ['classic' , 'pop' , 'rock' , 'jazz' ,'hiphop' , 'flonk'];
  var myFav = prompt ( ' Guess whats my favourite music?');
  var time = 0;

  for( var s =0 ; s <=5 ; s++) {

    for( var x =0 ; x <6 ; x++){
      if ( myFav === favMusic [x]) {
        alert(' you are correctly');
        score=score+1;

      } else {
        time=time+1;
        console.log(time,'score' ,score);
      }

    }
    if ( time ===6) {
      alert('try again');
      myFav = prompt ( ' Guess whats my favourite music?');
      time = 0; }

    else {
      break;
    }} };
favMusic();

document.write(score);
document.write(favMusic);
>>>>>>> 6a7dca7b2f85b29a3ce2bb10ab8ee14ed31484bc





