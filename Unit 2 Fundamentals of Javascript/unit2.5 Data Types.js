/* 
In Javascript, there are five basic, or primitive, types of data.
The five most basic types of data are strings, numbers, booleans, undefined, and null.
We refer to these as primitive data types.
A single variable can only store a single type of data. 
That means it’s important for you to learn to store the data correctly. */


let a = "Binay";
a = 223434;
alert(a); //string data type are inserted inside "..." while numeric value dosnt need this.
//output 223434.

let str = "Hello";
let message = `${str} NEPAL..`;  //`` is backtrack symbol.
alert(message); //output - Hello Nepal.

alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)


let n = 21;
n = 2.1; //output - 2.1

/* Besides regular numbers, there are so-called
“special numeric values” which also belong to this data type:
 Infinity, -Infinity and NaN.
*/
alert( 1 / 0 ); // Infinity
alert( Infinity ); // Infinity
alert( "not a number" / 2 ); // NaN, such division is erroneous
alert( "not a number" / 2 + 5 ); // NaN

/* In JavaScript, the “number” type cannot represent integer values larger than (253-1) (that’s 9007199254740991), or less than -(253-1) for negatives. It’s a technical limitation caused by their internal representation.

For most purposes that’s quite enough, but sometimes we need really big numbers, e.g. for cryptography or microsecond-precision timestamps.

BigInt type was recently added to the language to represent integers of arbitrary length.

A BigInt value is created by appending n to the end of an integer:

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n; */

//Boolean (Logical type)
let isGreater = 4>2;
alert( isGreater);
//output = true

let isGreater = 4<2;
alert( isGreater);
//output = false.

let age;
alert(age); // output = Undefined as age has no parameter.

//type of operator
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  

typeof null // "object"  

typeof alert // "function"  


/*
Summary
There are 8 basic data types in JavaScript.

number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
bigint is for integer numbers of arbitrary length.
string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
object for more complex data structures.
symbol for unique identifiers.
The typeof operator allows us to see which type is stored in a variable.

Two forms: typeof x or typeof(x).
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object.
*/