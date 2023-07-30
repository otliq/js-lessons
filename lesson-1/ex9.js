"use strict";

let book = {
	title: 'Name',
	author: 'Muhammad',
	nPages: 0,
	price: 0,
	'book publisher': {country: 'RU', city: 'Saint-Petersburg'}
};

book.isSelled = false;
book.isSelled = true;

// console.log(book.title);
// console.log(book.isSelled);

delete book.isSelled; // Becomes undefined after 'delete'

// console.log(book.isSelled); // undefined

// console.log('nPages' in book); // returns true
// console.log('isSelled' in book); // returns false

// let keyName = 'book publisher';
// let keyName = prompt('What do you want to know about this book?', 'author');

// console.log(book[keyName]);

let newKey = "color";
// let car = {
// 	model: 'toyota',
// 	[newKey+'Car']: 'black',
// };

// console.log(car.colorCar);

let car = createCar('Mercedes-Benz', 'black');

function createCar(model, color) {
	return {
		model, //if name of key and name of value are the same we can just write it once.
		color
	};
}

console.log(car);

for (let k in book) {
	console.log(k + ": " + book[k])
}

let phoneCodes = {
	"7": "RU",
	"49": "DE",
	"41": "SW",
	"1": "USA",
};
// 1, 7, 41, 49 // prints in order if keys are NUMBERS
for (let i in phoneCodes) {
	console.log(i);
}
