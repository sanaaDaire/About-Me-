'use strict'
var score =0 ;

var human = prompt('Please enter your name', 'Sana');
if (human != null) {
  alert('hello   ' + human + '   how are you today?');
}
//console.log(human);
var know = prompt('Hey! Do you know me ? (yes or no)').toLowerCase();
if (know === 'yes' || know === 'y') {
  alert('Amazing! welcome in my site');
  score=score+1;
} else if (know === 'no' || know === 'n') {
  alert('im so excited to enter my web page ');
} /*else while (jordan !== "yes" && jordan !== "no");
{
  var jordan = prompt("Are you from jordan ? (yes or no)");
}*/
//console.log(know);
var age = prompt('DO you think i am  Above 18 ? (yes or no)').toLowerCase();
if (age === 'yes' || age ==='y') {
  alert('YES! Iam above 18 ');
  score=score+1;
} else if (age  === 'no' || age === 'n') {
  alert(' Enjoy you are young ');
}
//console.log(age);
var wish = prompt('do you know if i am study a software engineer  ? (yes or no) ').toLowerCase();
if (wish === 'yes' || wish === 'y') {
  alert('i advice u to study it  ');
  score=score+1;
} else if (wish === 'no' || wish === 'n') {
  alert('I advice u to study coding ');
}
//console.log(wish);
var swim = prompt('tell me do u know if i like swiming  ? (yes or no )').toLowerCase();
if (swim === 'yes' || swim === 'y') {
  alert(' you are like me');
  score=score+1;
} else if (swim === 'no' || swim === 'n') {
  alert('oops! it is amazing try it ');
}
//console.log(swim);

var food = prompt('Do you know whats my favourite food? (yes or no)').toLowerCase();
if (food === 'yes' || food === 'y') {
  alert(' GREAT!');
  score=score+1;
} else if (food === 'no' || food === 'n') {
  alert('HUMMM! i am in love with Burger ');
}
//console.log(food);


for( var i =0; i <=3 ; i++) {
    var age1 = prompt('Guess whats my age? ');
    age1= Number(age1);
if ( age1 === 23 ) { alert ( ' you are correctly !!')
score=score+1;
break;
}
if ( age1 >=30  ) { alert ("too high ") }
if ( age1 <=20  ) { alert ("too low ") }
if ( age1 >25 && age1 <30 ) { alert (" high ") }
if ( age1 <23 && age1 >20) { alert (" low ") }
}
//console.log(food);

var favMusic = ['classic' , 'pop' , 'rock' , 'jazz' ,'hiphop' , 'flonk'];
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
            time = 0;   } 
        
        else {
            break;
        }}

    document.write(score);
    document.write(favMusic);





