'use strict';
var score = 0;
function humanQuestion() {
  var human = prompt('Firstly, Let me know whats your name?');
  while (human === '') {
    human = prompt('Enter your name');

  }
  alert('WELCOME '+ human);
 }
 humanQuestion (); 
//console.log(human);

function knowQuestion(){
var know = prompt('Do you know me? (yes or no)').toLowerCase();
while (know === '' ){
    know = prompt ('Please Answer');
}
if (know === 'yes' || know === 'y') {
  alert('Amazing!Welcome In My Site');
  score=score+1;
} else if (know === 'no' || know === 'n') {
  alert('I Am So Excited To Enter My Web Page ');
  }
   else { alert ( 'U are WELCOME!' );}
}
knowQuestion();
//console.log(know);

// function ageQuestion(){
// var age = prompt('Do you know my age ? (yes or no)').toLowerCase();
// while (age === '' ){
//     age = prompt ('Please Answer');
// }
// if (age === 'yes' || age ==='y') {
//   alert('YES! Great ');
//   score=score+1;
// } else if (age  === 'no' || age === 'n') {
//   alert(' I am 23! ');
//  }
// }
// ageQuestion(); 
//console.log(age);

// function wishQuestion(){
// var wish = prompt('do you know if i am software engineer  ? (yes or no) ').toLowerCase();
// while (wish === '' ){
//     wish = prompt ('Please Answer');
// }
// if (wish === 'yes' || wish === 'y') {
//   alert('i advice u to study it  ');
//   score=score+1;
// } else if (wish === 'no' || wish === 'n') {
//   alert('I advice u to study coding ');
//  }
// }
// wishQuestion ();
 //console.log(wish);

//  function swimQuestion(){
// var swim = prompt('tell me do u know if i like swiming  ? (yes or no )').toLowerCase();
// while (swim === '' ){
//     swim = prompt ('Please Answer');
// }
// if (swim === 'yes' || swim === 'y') {
//   alert(' you are like me');
//   score=score+1;
// } else if (swim === 'no' || swim === 'n') {
//   alert('oops! it is amazing try it ');
//  }
// }
// swimQuestion();
// //console.log(swim);

// function foodQuestion(){
// var food = prompt('Do you know whats my favourite food? (yes or no)').toLowerCase();
// while (food === '' ){
//     food = prompt ('Please Answer');
// }
// if (food === 'yes' || food === 'y') {
//   alert(' GREAT!');
//   score=score+1;
// } else if (food === 'no' || food === 'n') {
//   alert('HUMMM! i am in love with Burger ');
//  }
// }
// foodQuestion();
// //console.log(food);

// function age1Question (){
// for( var i =0; i <4 ; i++) {
//     var age1 = prompt('Guess whats my age? ');
//     age1= Number(age1);
// if ( age1 === 23 ) { alert (' you are correctly !!')
// score=score+1;
// break;
// }
// if ( age1 >=30 )  { 
//     alert (" high ") 
// }
// else if  ( age1 >=40 )  { 
//     alert (" high ") 
// }
// else if ( age1 <=10  ){ 
//     alert (" low ")
//  }
//  else if  ( age1 <=20 )  { 
//     alert (" low ") 
// }
// else {
//     alert(" so far about the correct answer!")
// }
//  }
//  alert(' My age is 23 years old');
// }
// age1Question(); 
// //console.log(age1);

// function carQuestion(){ 
// var bestCar = ['bm' , 'gclass' , 'ford' , 'jaguar' ,'audi' , 'rangerover'];
// var myFav = prompt ( ' Guess whats my favourite car?');
// var time = 0;

// for( var  a=0 ; a <=2 ; a++) {

//     for( var x =0 ; x <6 ; x++){
//         if ( myFav === bestCar [x]) {
//             alert(' you are correctly');
//             score=score+1;
            
//         } else {
//             time=time+1;  
//             console.log(time,'score' ,score);
//         }
    
// }      
    
//          if ( time ===2) {
//             alert('Try Again');
//             myFav = prompt ( ' Guess whats my favourite car?');
//             time = 0;   } 
        
//         else {
//             break;
            
//         }
//     }
//     alert('My Favourit car is BMW');
//         document.write(bestCar);
//     }
//         carQuestion();

//     document.write(score);





