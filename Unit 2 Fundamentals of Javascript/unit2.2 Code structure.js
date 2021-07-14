/* Statements : Statements are the syntax constructs and commands that perform actions.
we already seen statement in 2.1  [alert("Hello world");]  which print output "Hello world" */

// statements are seperated by semicolon (;)

alert('Hello'); alert('World');

/* OUTPUT 
Hello and World prints seperately.

/* same code can be written as: 
alert('Hello');
alert('World'); */


/* semicolon are ommited in case of line break for eg- */
alert('I')
alert('am')
alert('binay.')
/* OUTPUT =  I am binay. */

alert("Hey");

['you', 2].forEach(alert);

/* OUTPUT 
Prints Hey , you , 2 */

/*
alert("Hey")

['you', 2].forEach(alert);
no semicolon in alert("Hey") so prints Hey only.
*/

alert("Hello")[4,5].forEach(alert); /* Output= Hello,4,5

alert(3 +
    1
    + 2);
/* output 6 because JS doesnt insert semicolon in incomplete expression. */
