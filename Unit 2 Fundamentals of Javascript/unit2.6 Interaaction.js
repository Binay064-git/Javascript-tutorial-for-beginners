// intaraction with user are performed in alert,prompt,conform.


//alert
alert("Hello");
/* The mini-window with the message is called a modal window. The word “modal” means that the visitor can’t interact with the rest of the page, press other buttons, etc, until they have dealt with the window. In this case – until they press “OK”.  */

//prompt
// The function prompt accept two arguments:
var Name = prompt("Enter your Name");
//output It appears input box, which take input from user.

let age = prompt("Enter your age",100); //here 100
alert(`Your age is ${age}.`);

//confirm
let isage =confirm("Are you 18 years or above?");
alert( isage); //true if ok is pressed.