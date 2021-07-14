// mathmatical operators include +,-,*,/
// in 5*2  (*) is operator and 5,2 are operands.

let x=3;
x=-x;
alert(x); //output = -3 this is unary operator.

let a=1,b=2;
alert(a+b); //output 3.

/* The following math operations are supported:

Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %,
Exponentiation **.
*/

//Remainder
alert( 5 % 2 ); // 1, a remainder of 5 divided by 2
alert( 8 % 3 ); // 2, a remainder of 8 divided by 3

//Exponentiation
//The exponentiation operator a ** b raises a to the power of b.
alert( 2 ** 2 ); // 2² = 4
alert( 2 ** 3 ); // 2³ = 8
alert( 2 ** 4 ); // 2⁴ = 16

//string concatination 
let s = "my" + "string";
alert(s); // mystring

//decreament
let counter = 2;
counter--;        // works the same as counter = counter - 1, but is shorter
alert( counter ); // 1

//increment
let x = 3;
const y = x++;

alert(`x:${x}, y:${y}`);
// expected output: "x:4, y:3"

let a = 3;
const b = ++a;

alert(`a:${a}, b:${b}`);
// expected output: "a:4, b:4"
