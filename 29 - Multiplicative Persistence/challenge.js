let num = 39;

if (num <= 9) {
	console.log(0);
}

let counter = 0;

let arr = num;

arr = arr.toString();
splitter(arr);

function splitter(arr) {
let total = 1;
arr = arr.split("");
counter++;
for (var i = 0; i < arr.length; i++) {
	total *= parseInt(arr[i]);
}
console.log(total);
total = total.toString();
total.split("");
arr = total;
if (arr.length > 1) {
	splitter(arr);
}

}

console.log(counter);
console.log(arr);
