
'use strict';
let yname= prompt('what is your name ?');
alert('Welcome '+yname);

let Score=0 ;
let answer=prompt('Do you think that I am Living in Irbed?');
  if (answer.toLowerCase()==='no'|| answer.toLowerCase() ==='n') {
    Score++;
 
    alert('true');
    alert('your answer is '+answer+' ,  yes I am living in the Capital');
  } else {
 
    alert('false');
    alert('you answer is '+answer + ' NO IAM NOT ');
  }

  let answer2=prompt('Do you think that I can Swim?');
  if (answer2.toLowerCase()==='no'|| answer2.toLowerCase() ==='n') {
    Score++;
  
    alert('true');
    alert('your answer is '+answer2+'  You are right Unfortunately I am not good swimmer');
  } else {
   
    alert('false');
    alert('you answer is '+answer2 + ' Nope, Unfortunately I am not good swimmer ');
  }

  let answer3=prompt('Do you think that I Love Football?');
  if (answer3.toLowerCase()==='yes'|| answer3.toLowerCase() ==='y') {
    Score++;

    alert('true');
    alert('your answer is '+answer3+'  You are right Unfortunately I am not good swimmer');
  } else {
 
    alert('false');
    alert('you answer is '+answer3 + ' Nope, Unfortunately I am not good swimmer ');
  }

  let answer4=prompt('Do you think that I have beard?');
  if (answer4.toLowerCase()==='yes'|| answer4.toLowerCase() ==='y') {
    Score++;
  
    alert('true');
    alert('your answer is '+answer4+'  You are right I have it But iam not Shiakh');
  } else {
  
    alert('false');
    alert('you answer is '+answer4 + ' Actually, I have a beard But Im not Shaikh ');
  }


  let answer5=prompt('Do you think that I can drive a truck?');
  if (answer5.toLowerCase()==='no'|| answer5.toLowerCase() ==='n') {
    Score++;
  
    alert('true');
    alert('your answer is '+answer5+'  You are right I cant drive it ');
  } else {
  
    alert('false');
    alert('you answer is '+answer5 + ' Nope, Unfortunately I cant drive it ');
  }


  let answer6;
 
  let i=0;
  do {
    i=i++;
    answer6=Number(prompt('How old Do you think I am ? '));
    if (answer6>32) {
  
      alert('You have guessed too high!');
     
      alert ('again') ;
    }
    else if (answer6===32) {
    
      alert('true');
      point++;
    }
    else {
    
      alert('You have guessed too low!');
    
      alert ('again') ;
    }
   
    i++;
  } while ( answer6 !== 23 && i<4);
  alert('I am 32 years old');



  let Place =['Capital','Jordan','Amman'];
  
  let C=0;
 
  let answer7;
  do{
   
    answer7=prompt('Guess where I am living');
    if (answer7===h[0]) {
      alert(answer7 +'  true');
      k=6;
      point++;
    }
    else if (answer7===h[1]) {
      alert(answer7 +' True');
      k=6;
      point++;
    }
    else if (answer7===h[2]) {
      alert(answer7 +'  true');
      k=6;
      point++;
    }
    
    k++;
  }while( k!== 6 );
  alert('I live in'+h);


