let arr = [3,5,-1,8,12];

//Reduce numbers to total.
//Needs to be equal to largest number.
//Check if total exists in array.

arr = arr.sort(function(a,b) {return a - b;})

let largest = arr.pop();

arr = arr.reduce(function(a,b) {return a+b;},0);

(largest == arr) ? console.log(true) : console.log(false);

console.log(arr);

//Does not work on all cases!

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