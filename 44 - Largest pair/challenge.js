let num = 453857;

let numArray = num.toString().split("");

let highestNum;

highestNum = numArray[0] + numArray[1];

for (let i = 1; i < numArray.length; i++) {

    if ((numArray[i-1] + numArray[i]) > highestNum) {
        highestNum = numArray[i-1] + numArray[i];
    }   
    
}
// Alternatively, can also push to array and sort them afterwards.

console.log(highestNum);