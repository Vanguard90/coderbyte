//Brek sentence to words /\b[a-z]+/gi
let str = "Hello apple pie";

str = str.replace(/\s/g, ""); //Remove all empty spaces.

let arr = Array.from(str);

let obj = {};


for (var i = 0; i < arr.length; i++) {
	obj[arr[i]] = 0;
}


for (var i = 0; i < arr.length; i++) {
	if(obj[arr[i]] == 0) {
		obj[arr[i]] = 1;
	} else if (obj[arr[i]] > 0) {
		obj[arr[i]] +=1;
	}
}

console.log(obj);
console.log(arr);

//Knowledge still not good enough!!!