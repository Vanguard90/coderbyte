let str = "hello*3";
let letters = str.match(/[a-z]/gi);
letters = letters.join();
letters = letters.replace(/,/gi,"");

letters = letters.fromCharCode(letters + 1);

/*
let charArr = [];
let charArr2 = [];

for (var i = 0; i < letters.length; i++) {

	charArr = letters.charCodeAt(i);
	charArr2.push(charArr);
	console.log(charArr);
}
*/





console.log(letters);