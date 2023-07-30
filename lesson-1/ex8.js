"use strict";

// Anonym and Arrow Functions. 

let anonym = function () { //can't assign second a name this function
	console.log("This is anonym function")
};

// anonym();
(function () {
	console.log("This anonym function called automatically")
})();

//setTimeout
setTimeout(function () {
	console.log("This anonym function called automatically after one second")
}, 1000);


// let arrow = () => console.log("This is an arrow function");
// let arrow = () => "This is an arrow function";  //If returns only ONE object {} and 'return' may not be used
let arrow = (a, b) => {
	return a**b // if takes and returns more than one argument {} and 'return' must be used.
};


console.log(arrow(2,4));