"use strict";


// Function Declaration

function showMsg() {
	console.log('Hello');
}

// Function Expression (функциональное выражение)

// let showMsg = function () {
// 	console.log('Hello');
// };

let show = showMsg;

// console.log(showMsg);
// console.log(show);

// console.log(typeof showMsg);
// console.log(typeof show);

function agreeCookies(quesiton, yes, no) {
	if(confirm(quesiton)) yes();
	else no();
}

function agreeYes() {
	console.log('You agree with cookies');
}


function agreeNo() {
	console.log('You reject the cookies');
}

// agreeCookies('Our website uses cookies for best experience', agreeYes, agreeNo);

agreeCookies(
	'Our website uses cookies for best experience',
	function () {console.log('You agree with cookies')},
	function () {console.log('You agree with cookies')}		
);


let age = prompt('How old are you?', 18);
// let setAccess = null;

// if(age < 18) {
// 	// function setAccess() {
// 	// 	console.log('Access denied: you are a baby')
// 	// }
// 	setAccess = function () {
// 		console.log('Access denied: you are a baby')
// 	}
// }
// else {
// 	// function setAccess() {
// 	// 	console.log('Access allowed');
// 	// }
// 	setAccess = function () {
// 		console.log('Access allowed')
// 	}
// }


let setAccess = (age < 18) ? 
	function () {console.log('Access denied: you are a baby')} : 
	function () {console.log('Access allowed')};

setAccess();