let arr = [4, 4, 4, 6, 2];

let total = 0;

arr = arr.sort(function (a,b) {
	return a-b;
})

for (var i = 0; i < arr.length; i++) {
	total += arr[i];
}
let mean = total/arr.length;

console.log(mean);

let obj = {};

for (var i = 0; i < arr.length; i++) {
	let number = arr[i];
	if (obj[number] === undefined) {
		obj[number] = 1;
	} else {
		obj[number] += 1;
	}
}

let iterator;

let objnum = 0;
let objval = 0;

for (iterator in obj) { //iterator is like i in a for loop, but it goes through objects! So obj[iterator] is returning the value while iterator itself is the name of the object!
	if (obj[iterator] > objval) {
		objnum = iterator;
		objval = obj[iterator];
	}
}


console.log(objnum);
console.log(objval);
console.log(obj);

if (objnum == mean) {
	console.log(1);
} else {
	console.log(0);
}