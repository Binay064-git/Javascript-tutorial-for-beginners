//Type conversion
/* Most of the time, operators and functions automatically convert the values given to them to the right type.
*/

//string conversion
let value = true;
alert(typeof value); //boolean

value = String(value);
alert(typeof value); //string

//numeric conversion
alert("8"/"4"); //2
//string are inserted inside ".." but in above expression string is automaticaly converted into numeric value because of mathmatical operator(/).

let str = "12";
alert(typeof str);//string

let num = Number(str);
alert(typeof num); //converts to number.

let num = Number("abcd");
alert(num); //output - NaN (Not a Number)

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN (error reading a number at "z")
alert( Number(true) );        // 1
alert( Number(false) );       // 0

//boolean conversion
alert( Boolean("1") );
alert( Boolean(" ") );  //output- true

