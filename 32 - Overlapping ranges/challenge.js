let arr = [1,2,1,3,1];

let range1 = [];

for (let i = arr[0]; i <= arr[1]; i++) {
	range1.push(i);
}

let range2 = [];

for (let i = arr[2]; i <= arr[3]; i++) {
	range2.push(i);
}

let counter = 0;

for (var i = 0; i < range1.length; i++) {
	for (var j = 0; j < range2.length; j++) {
		if (range1[i] == range2[j]) {
			counter++
		}
	}
}

if (counter >= arr.pop()) {
	console.log(true);
} else {
	console.log(false);
}


/*

Better solution:

function OverlappingRanges(arr) {
    var target = arr.pop();
    var MaxLowerBound = Math.max(arr[0], arr[2]);
    var MinUpperBound = Math.min(arr[1], arr[3]);

    var range = MinUpperBound - MaxLowerBound + 1;

    return range >= target ? 'true' : 'false';
}

*/
console.log(counter);