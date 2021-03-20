'use strict';

let score = 0;

let yname= prompt('what is your name ?');

alert('Welcome '+yname);

function q1()
{
  let answer=prompt('Do you think that I am Living in Irbed?');

  if (answer.toLowerCase()==='no'|| answer.toLowerCase() ==='n') {
<<<<<<< HEAD
    Score++;
 
=======
    score++;
    console.log('true');
>>>>>>> 1700ea3af837a4241bf79863f97df84e58603b5a
    alert('true');
    alert('your answer is '+answer+' ,  yes I am living in the Capital');
  } else {
 
    alert('false');
    alert('you answer is '+answer + ' NO IAM NOT ');
  }
}

function q2()
{
  let answer2=prompt('Do you think that I can Swim?');

  if (answer2.toLowerCase()==='no'|| answer2.toLowerCase() ==='n') {
<<<<<<< HEAD
    Score++;
  
=======
    score++;
    console.log('true');
>>>>>>> 1700ea3af837a4241bf79863f97df84e58603b5a
    alert('true');
    alert('your answer is '+answer2+'  You are right Unfortunately I am not good swimmer');
  } else {
   
    alert('false');
    alert('you answer is '+answer2 + ' Nope, Unfortunately I am not good swimmer ');
  }
}

function q3()
{
  let answer3=prompt('Do you think that I Love Football?');

  if (answer3.toLowerCase()==='yes'|| answer3.toLowerCase() ==='y') {
<<<<<<< HEAD
    Score++;

=======
    score++;
    console.log('true');
>>>>>>> 1700ea3af837a4241bf79863f97df84e58603b5a
    alert('true');
    alert('your answer is '+answer3+'  You are right Unfortunately I am not good swimmer');
  } else {
 
    alert('false');
    alert('you answer is '+answer3 + ' Nope, Unfortunately I am not good swimmer ');
  }
}

function q4()
{
  let answer4=prompt('Do you think that I have beard?');

  if (answer4.toLowerCase()==='yes'|| answer4.toLowerCase() ==='y') {
<<<<<<< HEAD
    Score++;
  
=======
    score++;
    console.log('true');
>>>>>>> 1700ea3af837a4241bf79863f97df84e58603b5a
    alert('true');
    alert('your answer is '+answer4+'  You are right I have it But iam not Shiakh');
  } else {
  
    alert('false');
    alert('you answer is '+answer4 + ' Actually, I have a beard But Im not Shaikh ');
  }
}

function q5()
{
  let answer5=prompt('Do you think that I can drive a truck?');

  if (answer5.toLowerCase()==='no'|| answer5.toLowerCase() ==='n') {
<<<<<<< HEAD
    Score++;
  
=======
    score++;
    console.log('true');
>>>>>>> 1700ea3af837a4241bf79863f97df84e58603b5a
    alert('true');
    alert('your answer is '+answer5+'  You are right I cant drive it ');
  } else {
  
    alert('false');
    alert('you answer is '+answer5 + ' Nope, Unfortunately I cant drive it ');
  }
}

function q6()
{
  let answer6;
<<<<<<< HEAD
 
  let i=0;
=======
  let i = 0;

>>>>>>> 1700ea3af837a4241bf79863f97df84e58603b5a
  do {
    i=i++;
    answer6=Number(prompt('How old Do you think I am ? '));
    if (answer6>32) {
  
      alert('You have guessed too high!');
<<<<<<< HEAD
     
      alert ('again') ;
=======
      alert ('again');
>>>>>>> 1700ea3af837a4241bf79863f97df84e58603b5a
    }
    else if (answer6===32) {
    
      alert('true');
      score++;
      break;
    }
    else {
    
      alert('You have guessed too low!');
<<<<<<< HEAD
    
      alert ('again') ;
=======
      alert ('again');
>>>>>>> 1700ea3af837a4241bf79863f97df84e58603b5a
    }
   
    i++;
  } while ( answer6 !== 23 && i<4);

  alert('I am 32 years old');
}

<<<<<<< HEAD
  let Place =['Capital','Jordan','Amman'];
  
  let C=0;
 
=======
function q7()
{
  let place =['CAPITAL','JORDAN','AMMAN'];
  let tryCount = 6;
>>>>>>> 1700ea3af837a4241bf79863f97df84e58603b5a
  let answer7;

  do{
<<<<<<< HEAD
   
    answer7=prompt('Guess where I am living');
    if (answer7===h[0]) {
=======
    answer7 = prompt('Guess where I am living? \nYou try ' + tryCount + '/6');

    if (answer7.toUpperCase() === place[0]) {
>>>>>>> 1700ea3af837a4241bf79863f97df84e58603b5a
      alert(answer7 +'  true');
      score++;
      break;
    }
    else if (answer7.toUpperCase() === place[1]) {
      alert(answer7 +' True');
      score++;
      break;
    }
    else if (answer7.toUpperCase() === place[2]) {
      alert(answer7 +'  true');
      score++;
      break;
    }
<<<<<<< HEAD
    
    k++;
  }while( k!== 6 );
  alert('I live in'+h);


=======

    tryCount--;

  }while( tryCount > 0 );

  if(tryCount === 0){
    alert('I live in ' + place[1] + ' or ' + place[2]);
  }
}

function questions()
{
  q1();
  q2();
  q3();
  q4();
  q5();
  q6();
  q7();
  console.log('your score: ' + score +'/7');
  alert('your score: ' + score +'/7');
}

questions();
>>>>>>> 1700ea3af837a4241bf79863f97df84e58603b5a
