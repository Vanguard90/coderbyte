let num = 6;;

let pivot = Math.sqrt(num);
let value = num.toString().length + 1;
for (let i = 1; i <= pivot; i++) {
  if (num % i === 0) {
    let maxFactor = i;
    maxCompFactor = num / maxFactor;
    maxFactorString = maxFactor.toString();
    maxCompFactorString = maxCompFactor.toString();
    let totalLength = maxFactorString.length + maxCompFactorString.length;
    if (totalLength < value) {
      value = totalLength;
    }
  }
}

// Found solution, not my own solution.


console.log(value);