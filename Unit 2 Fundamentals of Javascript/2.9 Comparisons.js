//comparisions operators in maths are
/* Greater/less than: a > b, a < b.
Greater/less than or equals: a >= b, a <= b.
Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
Not equals. In maths the notation is ≠, but in JavaScript it’s written as a != b.

All comparison operators return a boolean value:

true – means “yes”, “correct” or “the truth”.
false – means “no”, “wrong” or “not the truth”.
*/

alert( 2 > 1 );  // true (correct)
alert( 2 == 1 ); // false (wrong)
alert( 2 != 1 ); // true (correct)

// A comparison result can be assigned to a variable, just like any value:

let result = 5 > 4; // assign the result of the comparison
alert( result ); // true

alert( 'M' > 'B' ); // true
alert( 'Glove' > 'Glee' ); // true
alert( 'Beef' > 'Bee' ); // true

alert( '2' > 1 ); // true, string '2' becomes a number 2
alert( true == 1 ); // true

/* A strict equality operator === checks the equality without type conversion.

In other words, if a and b are of different types, then a === b immediately returns false without an attempt to convert them.

Let’s try it:

alert( 0 === false ); // false, because the types are different
There is also a “strict non-equality” operator !== analogous to !=.

The strict equality operator is a bit longer to write, but makes it obvious what’s going on and leaves less room for errors. */

