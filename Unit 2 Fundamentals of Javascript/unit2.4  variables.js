// variables are containers for storing data (values).
//variable are declered with the var keyword. like

var x = 2;
var y = 5;
var sum = x+y;
alert(sum);
// output = 7


//let instead of var
let message
, message = 'JavaScript is fun';
alert(message);
// output = JavaScript is fun.

//example

let message;
message = 'Hi!';
message = 'Where are you!';
alert(message);
//firstly message store 'Hi!' and later it overides 'Where are you!'

//example
let hello = 'Hello world!';
let message;
message = hello;
alert(message);
alert(hello);
// copy 'Hello World' from hello into message
//output - Hello world!  Hello World!


/* Rules for decelering the variable
The name must contain only letters, digits, or the symbols $ and _.
The first character must not be a digit. */

let userName; //is valid
let Binay123; //is valid

/*let 1d; //is invalid
let cr-7; //is invalid  hyphens arenot allowed.
// variable are case sensetive i.e apple and APPLE are different. */


const myBirthday = 05-11
//cannot assign new value as it is constant.


//example
/*
Declare two variables: admin and name.
Assign the value "John" to name.
Copy the value from name to admin.
Show the value of admin using alert (must output “John”).
  */
let admin, name; // can declare two variables at once
name = "John";
admin = name;
alert( admin ); //output = john.
