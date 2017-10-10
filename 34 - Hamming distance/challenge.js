let arr=["coder", "codec"];

let counter = 0;

for (var i = 1; i <= arr.length -1; i++) {
	console.log(i);
	for (var j = 0; j < arr[i].length; j++) {
		console.log(j);
		if(arr[i-1][j] == arr[i][j]) {
			counter++;
		}
	}
}


console.log(arr[0].length - counter);