let num = 124;

function checkPow(num) {

for (var i = 0; Math.pow(2, i) <= num; i++) {
	console.log(i);
	if (Math.pow(2, i) == num) {
		return true;
	}
}
return false;
}


checkPow(num);