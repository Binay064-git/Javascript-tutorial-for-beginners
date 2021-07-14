/*
//Arrow functions, the basics
//There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

//It’s called “arrow functions”, because it looks like this:

let func = (arg1, arg2, ..., argN) => expression
//…This creates a function func that accepts arguments arg1..argN, then evaluates the expression on the right side with their use and returns its result.

//In other words, it’s the shorter version of:

let func = function(arg1, arg2, ... argN) {
  return expression;
};
*/

//example of arrow function
let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3


//If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.

//For example:

let double = n => n * 2;
// roughly the same as: let double = function(n) { return n * 2 }

alert( double(3) ); // 6
//If there are no arguments, parentheses will be empty (but they should be present):

let sayHi = () => alert("Hello!");

sayHi();


//Arrow functions can be used in the same way as Function Expressions.
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");

welcome();