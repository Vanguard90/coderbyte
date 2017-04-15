let arr = [2,4,8,16,32];

function typeCheck(arr) {

for (var i = 0; i < arr.length; i++) {
	while(arr[i+1] !== undefined && arr[i-1] !== undefined) {
		if ((arr[i+1] - arr[i]) == (arr[i] - arr[i-1])) {
			return "Arithmetic";
		} else if ((arr[i+1]/arr[i]) == (arr[i]/arr[i-1])) {
			return "Geometric";
		} else {
			return -1;
		}
	}
	}
}



console.log(typeCheck(arr));

//Does not fulfill all cases!

/*
function ArithGeo(arr) {
  function isArith(arr) {
    var x = arr.length;
    for (var i = 1; i < x-1; i++) {
      if (arr[i]-arr[i-1] !== arr[i+1]-arr[i]) {
        return false;
      }
    }
    return true;
  }
  function isGeo(arr) {
    var x = arr.length;
    for (var i = 1; i < x-1; i++) {
      if (arr[i+1]/arr[i] !== arr[i]/arr[i-1]) {
        return false;
      }
    }
    return true;
  }
  if (isArith(arr)) {
    return "Arithmetic";
  } else if (isGeo(arr)) {
    return "Geometric";
  } else {
    return -1;
  }
  */

  //Correct solution that has similar line of thinking with mine.