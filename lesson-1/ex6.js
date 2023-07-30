"use strict"

// function showItem(item, int=125){
// 	console.log(item);
// 	return item + " " + int
// }

// let responce = showItem("This is string");
// console.log(responce);


// function abs(x) {
// 	return (x < 0) ? -x: x;
// 	console.log('This is not gonna work');
// }

// let res = abs(8);
// console.log(res);


function showPrimes(n) {
	for (let i = 2; i < n; i++) {
		if(!isPrime(i)) continue;

		console.log(i);
	}
}

function isPrime(n) {
	for (let i = 2; i < n; i++) {
		if (n % i ==0) return false;
	}
	return true;
}

showPrimes(1000);