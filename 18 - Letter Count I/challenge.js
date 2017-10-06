//Brek sentence to words /\b[a-z]+/gi
let str = "Hello apple pie";

arr = str.split(" ");

let obj = {};

for (var i = 0; i < arr.length; i++) {
	obj[i] = arr[i];
}

let pieces = [];

for (var i = 0; i < arr.length; i++) {
	pieces[i] = arr[i].split("");
}

console.log(pieces);

let counts = {};


for (var i = 0; i < pieces.length; i++) {
	counts[i] = {};
	for (var j = 0; j < pieces[i].length; j++) {
		if (counts[i][pieces[i][j]] == undefined) {
			counts[i][pieces[i][j]] = 1;	
		} else if (counts[i][pieces[i][j]] =! undefined) {
			counts[i][pieces[i][j]]++;
		}
	}
	
}
let highest = [];

for (var k = 0; k < counts.length; k++) {
	for (deepCounter in counts[k]) {
		if(counts[k][deepCounter] > counts[k][deepCounter]) {
			highest[k] = counts[k][deepCounter];
		} else {
			highest[k] = counts[k][deepCounter];
		}
	}
}


//Made progress but still not correct!!!

console.log(highest);

console.log(counts);