let num = 99;

function mainCalculator(num) {

    if (num < 9) {
        console.log(num + 1);
    } else if(9 < num && num <= 100) {
        console.log(num);
        console.log('triggered');
        incrementCheck(num);
    } else if (num > 100) {
        numArray = num.toString().split("");
            for (let i = 0; i < numArray.length / 2; i++) {
                 numArray[numArray.length - 1 - i] = numArray[i];
                 console.log(numArray);
            }
            console.log(parseInt(numArray.join("")));
    }
}

function incrementCheck(numb) {
    num += 1;
    let tempNum = numb + 1;
    tempNum = tempNum.toString();
    tempNum[0] === tempNum[1] ? console.log(num) : mainCalculator(num);
}

mainCalculator(num);