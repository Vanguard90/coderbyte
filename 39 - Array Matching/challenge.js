let strArr = ["[5, 2, 3]", "[2, 2, 3, 10, 6]"];

let arr1 =  strArr[0].match(/[0-9]+/gi);
let arr2 = strArr[1].match(/[0-9]+/gi);

let longest;

arr1.length > arr2.length ? longest = arr1.length : longest = arr2.length;

/*
Sleekier solution:

let length = Math.max(arr1.length, arr2.length);

*/

let arrTotal = [];

for (var i = 0; i < longest; i++) {
	console.log(i);
	if (arr1[i] != undefined && arr2[i] != undefined) {
		arrTotal[i] = parseInt(arr1[i]) + parseInt(arr2[i]);
	} else if (arr1[i] == undefined) {
		arrTotal[i] = parseInt(arr2[i]);
	} else if (arr2[i] == undefined) {
		arrTotal[i] = parseInt(arr1[i]);
	}
/*
Better solution would be:

else {
            resArr[i] = arr1[i] || arr2[i];
 }

*/
}

let joined = arrTotal.join("-")



console.log(arr1);
console.log(arr2);
console.log(longest);
console.log(arrTotal);
console.log(joined);