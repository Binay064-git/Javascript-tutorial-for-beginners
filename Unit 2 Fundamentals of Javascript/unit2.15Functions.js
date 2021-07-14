//Javascript function is defined with the function keyword, followed by a name,followed by parenthesis ().
//Function Name can contain letters, digits,underscore,and dollor signs(same rule as variables.)
//The parenthesis may include parameter names seperated by commas: (parameter1,parameter2,...)

/* 
function name(parameter1, parameter2, parameter3){
    //code to be executed
}
*/

/* Function parameters are listed inside the parenthesis() in the function defination.
Function arguments are the values received by function when it is invoked.
inside the function, the arguments(the parameters)behave as local variables.
*/

//Function invocation/ Function call
/*
The code inside the function will execute when "something" invokes (calls) the function:

When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked)
*/

/*
Function Return
When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":
*/
function myFunction(a,b){
    return a*b;
}
let x = myFunction(4,3);
alert(x);

/*Local variables
A variable declared inside a function is only visible inside that function.

For example:
*/
function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function


//outer variable
//A function can access an outer variable as;
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message); //Hello, John
}

showMessage(); // Hello, John


//function and outer variable, we can modify outer variable as well..
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function

//Parameters
//We can pass arbitrary data to functions using parameters.

//In the example below, the function has two parameters: from and text.

function showMessage(from, text) { // parameters: from, text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)

//Defult value
//If a function is called, but an argument is not provided, then the corresponding value becomes undefined.

function showMessage(from, text = "no text given") {
    alert( from + ": " + text );
  }
  
  showMessage("Ann"); // Ann: no text given

  //Returning a value

  function sum(a, b) {
    return a + b;
  }
  
  let result = sum(1, 2);
  alert( result ); //3

  //Example 2
  function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  
  let age = prompt('How old are you?', 18);
  
  if ( checkAge(age) ) {
    alert( 'Access granted' );
  } else {
    alert( 'Access denied' );
  }