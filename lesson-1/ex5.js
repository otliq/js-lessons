"use strict"

// all:
// for(let x=0; x<=100; ++x){
// 	if(x==15) break all;
// }

let S=0, i=1;
// while(i <= 100){
// 	S+= 1/i;
// 	++i;
// }

// console.log(S);

/* && - and, 
|| - or, 
! - not
*/

// while((S += i++)<100);
// console.log(S);

const PSW = 'password';
let psw = null;

do {
	psw = prompt('Enter password',);
}
while(psw!=PSW);
console.log('login to system');