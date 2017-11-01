let arr = [0, 4, 22, 4, 14, 4, 2];

let length = arr.length;

let numObject = {};

arr.forEach(val => {if (!numObject[val]) {
	numObject[val] = 1;
	} else {
		numObject[val]++;
}});

let countArr = [];

for (let key in numObject) {
	countArr.push(numObject[key]);
}

let maxNum = Math.max.apply(null, countArr);

maxNum > length/2 ? console.log(false) : console.log(true);




console.log(countArr);