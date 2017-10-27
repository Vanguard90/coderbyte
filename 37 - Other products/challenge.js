let arr = [1,4,3];

let result = 1;

for (var i = 0; i < arr.length; i++) {
	result *= arr[i];
}

for (var i = 0; i < arr.length; i++) {
	arr[i] = result/arr[i];
	console.log(arr);
}

arr = arr.join("-");
console.log(arr);

/*
Another good solution that achieves what I wanted in the first place:

  let holdArray = [];

    arr.forEach((val, ind, theArray) => {
      newArray = Array.from(theArray)
      newArray.splice(ind,1)

      holdArray[ind] = newArray.reduce((val1, val2) => val1 * val2);
    })

    return holdArray.join('-');
*/