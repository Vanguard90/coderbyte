let arr = [1, 3, 6, 13, 54];

let counter = 0;

for (var i = 1; i < arr.length; i++) {
	if (arr[i-1] < arr[i]) {
		counter++;
		arr[i] += arr[i-1];
		arr[i-1] = 0;
		console.log(arr);
	} else {
		console.log(false);
	}
}

if (counter == arr.length - 1) {
	console.log(true);
}