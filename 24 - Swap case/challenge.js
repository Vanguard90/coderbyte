let str = "Hello-LOL";

arr = Array.from(str);

for (var i = 0; i < arr.length; i++) {
	if (arr[i] == arr[i].toUpperCase()) {
		arr[i] = arr[i].toLowerCase();
	} else if (arr[i] == arr[i].toLowerCase()) {
		arr[i] = arr[i].toUpperCase();
	}
}

str = arr.join("");


console.log(str);