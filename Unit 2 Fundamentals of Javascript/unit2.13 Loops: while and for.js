// while loop
//syntax
/* while (condition) {
  // code
  // so-called "loop body"
}
*/

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

let i = 3;
while (i) { // when i becomes 0, the condition becomes falsy, and the loop stops
  alert( i );
  i--;
}
//do....while loop
//The loop will first execute the body, then check the condition, and, while it’s truthy, execute it again and again.

//For example:

let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);


// for loop
/* syntax
for (begin; condition; step) {
  // ... loop body ...
}
*/

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
  }
  
  //breaking loop

  let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );
