//We can create a function and assign it to a variable, known as function expression.
//example
var myfun = function show(){
    alert("Hello Hello");
};
myfun();

//but you cant call function expression before function defination.
myfun(); //myfunction is not a function.

var myfun = function show(){
    document.write("Hello Hello");
};
