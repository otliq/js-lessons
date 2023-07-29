"use strict";
/* types of variables 
number 41, 12, 15, 
string 'string', `like f string in python  can put variable here  $(variable_name);`, 
Infinity, 
NaN [Not a number], 
boolean [true, false], 
null [like None type in python], 
undefined [if nothing assigned to variable], 
Symbol [to generate unique id*]
*/

let a = 5;
let b = 7.23;

// console.log(typeof a);

let c = 1/0;
let d = Infinity
let inf = 1e1000;

// console.log(inf);

let str = "string"/2 + 10;
// console.log(str);


let msg1 = "string 1";
let msg2 = 'string 2';
// let msg3 = `string 3`;

let msg3 = `a = ${a}, b = ${b}`;

// console.log(msg3);


// let cl = "class='myclass'";
// let cl = "class=\"myclass\"";
let cl = 'class=\\"myclass"';

// console.log(cl);


let isWin = true, isCheckedField = false;
let isGreater = 4 > 1;
// console.log(isGreater);

let id = Symbol();
let id2 = Symbol();

console.log(id === id2);
