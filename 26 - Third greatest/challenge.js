let arr = ["hello","world","world"];

arr.sort(function (a,b) {
	return b.length-a.length;
})

let result = arr[2];


console.log(result);
console.log(arr);