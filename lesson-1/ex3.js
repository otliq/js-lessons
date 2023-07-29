"use strict";

// let a = true;
// a = String(a);

// console.log(a); //true
// console.log(typeof a); //string

// let str = "it's a string"
// str = Number(str); //NaN
// console.log(str);

// let num = '125';

// num = Number(num); //125
// console.log(num);

// let num2 = '        325        ';
// num2 = Number(num2); //325
// console.log(num2);

// console.log('6'/'3'); //2

// console.log('6'/ 3); //2
// console.log(6/ '3'); //2

// console.log('6'+'3'); //63
// console.log('6'+ 3); //63
// console.log(6 +'3'); //63
// console.log(6 + 3); //9


// let c = '6', b = '3';
// console.log(Number(c) + Number(b)); //9


// console.log(Number("   142    ")); //142
// console.log(Number("123z")); //NaN
// console.log(Number(true)); //1
// console.log(Number(false)); //0


// console.log(Boolean(1)); //true
// console.log(Boolean(0)); //false
// console.log(Boolean('0')); //true
// console.log(Boolean('hello')); //true
// console.log(Boolean('')); //false


// let x,y,z;
// x = y = z = 2 + 2;
// console.log(x,y,z) //4 4 4

let a, b = 1;
let c = 3 - (a = b + 1);
console.log(a, b, c) //2 1 1


/* 
alert, - displays modal window and stops script running till alert confirmation. After confirmation script continues running 
prompt, - displays modal window
confirm
*/
alert('As Salam Aleykum'); 

let age = prompt('How old are you?', 18); //first parameter is title that we show on modal window, second parameter is default value
console.log(age); //18 | null if CANCEL window

let isCar = confirm('Do you have a car?');//true if confirmed, else false
console.log(isCar);

