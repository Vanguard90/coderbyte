let strArr = ["5","4","6","E","1","7","E","E","3","2"];

//Iterate on array until E character.
//Upon reaching E, push the smallest integer out of the current array onto a new array.

let eIndex = [];

let item = 'E';

var idx = strArr.indexOf(item);
while (idx != -1) {
  eIndex.push(idx);
  idx = strArr.indexOf(item, idx + 1);
}

let minimum = [];

for (var i = 0; i < eIndex.length; i++) {
	let tempArr = strArr.slice(0,eIndex[i]);
	tempArr = tempArr.sort(function (a,b) {
		if (a > b) {
			return 1;
		} else if (b > a) {
			return -1;
		}
	})
	minimum.push(tempArr[0]);
	let first = tempArr[0];
	let delPoint = first;
	console.log(delPoint);
	//let delIndex = strArr.IndexOf(delPoint);
	//console.log(delIndex);
	//strArr[delIndex].pop();
}

console.log(minimum);

console.log(eIndex);

console.log(counter);