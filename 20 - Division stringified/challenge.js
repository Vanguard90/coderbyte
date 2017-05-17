let num1 = 6874656776;
let num2 = 67;

let result = num1/num2;

result = Math.round(result);

result = result.toString();

let thous = result.length;

if (thous > 0) {
	resArray = Array.from(result);
}

resArray = Array.from(result);
console.log(resArray);

for (var i = 1; i < thous/3; i++) {
	resArray.splice((thous - 3*i), 0, ",");
}

resArray = resArray.join("");
console.log(resArray);
console.log(result);