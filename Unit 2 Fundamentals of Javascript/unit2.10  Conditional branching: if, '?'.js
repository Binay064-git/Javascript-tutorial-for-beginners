//Conditional branching: if, '?'
//sometimes different actions need to be performed based on different conditions 

let Weather = prompt("How is weather today ?",'Rainy,sunny,cloudy');
if (Weather == 'rainy') {
    alert("Take umberella");
} else {
    alert("Have a good day");
}

let Date = prompt("Enter date");
if (Date == '1/1') {
    alert("Happy New year");
} else {
    alert('Wish you a good day');
}

//several if/else
let Marks = prompt('Enter your Marks?', '');

if (Marks < 32) {
  alert( 'Failed..Try again' );
} else if (Marks > 80) {
  alert( 'You score Distinction marks.' );
} else {
  alert( 'congratulations!! You are passed...' );
}
// ?  A sequence of question mark operators ? can return a value that depends on more than one condition.
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );

let Name = prompt('Who created facebook?', '');

(Name == 'Mark Zukersberg') ?
   alert('Right!') : alert('Wrong.');