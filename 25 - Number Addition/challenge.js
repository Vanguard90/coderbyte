let str = "75Number9";

let numbers = str.match(/[0-9]+/gi) || [0];

numbers = numbers.reduce(function (a,b) {
	return parseInt(a) + parseInt(b);
}, 0);


console.log(numbers);