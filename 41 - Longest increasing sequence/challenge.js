let arr = [4, 3, 5, 1, 6];

  let max = 1;
  let check;
  let copy = arr.slice();
  while (copy.length > 1) {
  	check = getLIS(copy);
  	if (check > max) { max = check; }
  	copy.splice(copy.indexOf(Math.max(...copy)), 1);
  }
  
  console.log(max);
  
  function getLIS(arr) {
  	let LIS = 1;
  	let currentLIS = 1;
    let currentHighest;
    for (let i = 0; i < arr.length; i++) {
      currentHighest = i;
      for (let j = 1 + i; j < arr.length; j++) {
        if (arr[j] > arr[i] && arr[j] > arr[currentHighest]) {
          currentLIS++;
          currentHighest = j;
        }
      }
      if (currentLIS > LIS) { LIS = currentLIS; }
      currentLIS = 1;
    }
    return LIS;
  }

//Not my solution. Study thoroughly.