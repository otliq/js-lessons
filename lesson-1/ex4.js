"use strict";

let a = 1;

// console.log(-a); //-1 unary
// console.log(10-a); //9 binary

// let x = 2.8, y = 7.3;
// console.log(x-y); //4.5

// let x = "2.8", y = "7.3"; //automaticly converts string to number type
// console.log(x-y); //-4.5

// let arg = -x;
// console.log(arg, typeof arg); //-2.8 'number'

let x = true, y = null, z = undefined;
console.log(-x); //-1
console.log(-y); //-0
console.log(-z); //NaN
console.log(typeof -x, typeof -y, typeof -z); //number number number 04:09