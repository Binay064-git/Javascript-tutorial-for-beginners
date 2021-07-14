//logical operators
//OR operator
//it is repesented with two vertical line symbols. ||

//four possible combinations of OR operators
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false

let Time = prompt('enter time');
if (Time < 10 || Time > 17) {
    alert("Office closed, Come tommorow");
} else {
    alert("Office is open, you can have your word done..")
}

//AND operator
//possible combination of AND operators
alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
  alert( 'The time is 12:30' );
}

//NOT
//The boolean NOT operator is represented with an exclamation sign !.

//The syntax is pretty simple:

//result = !value;
alert( !0 ); // true