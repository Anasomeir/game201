'use strict'

let score = 0;
let name =prompt('What is your name ?');

alert('your name is '+name+ ' you will play the guessing game');


let reply=prompt('Do you think that I am living in Irbed ?');

if (reply.toLowerCase() ===('no')||reply.toLowerCase() ===('n'))
{

    score++;
    alert(name+' your answer is correct ,you got a point');
}

else 
{
    alert(name+ ' Your answer is wrong !');
}



////////


let reply2=prompt('Do I prefer fishing or swimming ?');

if (reply2.toLowerCase() === 'fishing')

{
    score++;
    alert(name+' your answer is correct ,you got a point');
}

else 
{
    alert(name+ ' Your answer is wrong !');
}

/////


let reply3=prompt('Do I prefer summer or winter ?');

if (reply3.toLowerCase() === 'summer')

{
    score++;
    alert(name+' your answer is correct ,you got a point');
}

else 
{
    alert(name+ ' Your answer is wrong !');
}

//////


let reply4=prompt('Do I prefer Power Horse or Red Bull  ?');

if (reply4.toLowerCase() === 'Red Bull')

{
    score++;
    alert(name+' your answer is correct ,you got a point');
}

else 
{
    alert(name+ ' Your answer is wrong !');
}

//////


let reply5=prompt('Do I prefer A holiday on the -city- or in the -Island-  ?');

if (reply5.toLowerCase() === 'island')

{
    score++;
    alert(name+' your answer is '+reply5+' and it is correct ,you got a point');
}

else 
{
    alert(name+ ' Your answer is wrong !');
}

///////



 let age=32;
 let reply6 =Number(prompt('Guess my age ?'));

for (let g = 0; g<3; g++)

{
    if (reply6 < age)
    {
        alert('too low');
        reply6=prompt('try again');
    }

else if (reply6 > age)
{
    alert('too high');
    reply6=prompt('try again');
}

else if (reply6 === age)
{
    score++;
    alert('correct answer ');
   g = 4;
}
}

//////////////////////////

let hobbies=['football','travel','music'];

let reply7=prompt('what is my hobbies?s');

for (let i=0; i < hobbies.length; i++) {


    if (prompt===hobbies.length)


    {
        score++;
        alert ('correct answer');
        break;
    }
    
    
    else 
    
    {
        alert('wrong answer');
        reply7=prompt('try again');
    }
    
}

alert (name+' you got '+score+ 'points');

