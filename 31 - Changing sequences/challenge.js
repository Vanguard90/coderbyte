//variable counts until one is bigger than other etc.
//last count point is our switch point

let arr = [-4, -2, 9, 10];


for (var i = 1; i < arr.length - 1; i++) {
	if (((arr[i-1] < arr[i]) && (arr[i] > arr[i+1])) || ((arr[i-1] > arr[i]) && (arr[i] < arr[i+1])))  {
		console.log(i);
	} else if (i + 1 == arr.length - 1) {
		console.log(-1);
	}
}

console.log(arr);