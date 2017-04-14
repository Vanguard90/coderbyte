let str = "after it"


function strCheck(arg){

if (arg.match(/A...B/i) !== null || arg.match(/B...A/i) !== null) {

	return true;
} else {
	return false;
}
}

console.log(strCheck(str));