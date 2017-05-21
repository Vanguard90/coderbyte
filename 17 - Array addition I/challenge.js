let arr = [10,20,30,40,100];

//Reduce numbers to total.
//Needs to be equal to largest number.
//Check if total exists in array.

arr = arr.sort(function(a,b) {return a - b;}); //Sort array from smallest to largest.

let largest = arr.pop();//Pop the largest in array and mark it as largest number.

for (var i = 0; i < arr.length; i++) {
	let sum = arr[i];
	console.log(sum);
	for (var n = 0; n < arr.length; n++) {
		sum +=arr[n];
		console.log(arr[n]);
		console.log(sum);
		(sum === largest) ? console.log(true) : console.log(false);
	}

}

//I'm taking the number I want, for the first loop, there is only one number as a focus point.
//I will add every other number in the array to this number and see if it ends up with the number I need.

console.log(arr);

//Above solution now works on all cases!

/* Correct solution:

 var max = arr[0];
  for(var i = 1; i<arr.length; i++){
    if(arr[i]>max) {
      max = arr[i];
    }
  }
  //move max to end of array to make operations easier
  if(arr.indexOf(max) !== arr.length-1) {
    var dummy = max;
    arr[arr.indexOf(max)] = arr[arr.length-1];
    arr[arr.length-1] = max;
  }
  
  //begin checking everything
  for(var i = 0; i < arr.length; i++) {
	var sum = arr[i];
    for(var j = 1; j < arr.length; j++) {
      sum += arr[j];
      if(sum === max) {return true;}
    }
  }
  return false; 

  */