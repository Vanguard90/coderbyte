let str = "9994673";

str = str.split("");

for (var i = 1; i < str.length; i++) {
	if (str[i-1]%2 === 1 && str[i]%2 === 1) {
		let previous = i;
		str.splice(previous,0,"-");
		console.log(i);
	}
	console.log(i);
}

str = str.join("");
console.log(str);