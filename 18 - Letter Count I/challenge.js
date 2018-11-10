let str = "Hello apple pie";

let wordArr = str.split(" ");

let wordObjs = [];

wordArr.forEach( (arrItem, index) => {
    wordObjs[index] = {};
    arrItem.split("").forEach( childArrItem => {
        if (wordObjs[index][childArrItem] === undefined) {
            // Also can use Object.hasOwnProperty
            wordObjs[index][childArrItem] = 1;
            if (wordObjs[index].highest === undefined) {
                wordObjs[index].highest = {
                    key: childArrItem.toString(),
                    value: 1,
                    fullWord: arrItem
                }
            }
        } else {
            wordObjs[index][childArrItem] += 1;

            if (wordObjs[index][childArrItem] > wordObjs[index].highest.value) {
                wordObjs[index].highest = {
                    key: childArrItem.toString(),
                    value: wordObjs[index][childArrItem],
                    fullWord: arrItem
                }
            }
        }
    });


});


let highestFinal;

wordObjs.forEach( (item, index) => {
    if (highestFinal === undefined) {
        highestFinal = wordObjs[0].highest;
    } else if (wordObjs[index].highest.value > highestFinal.value) {
        highestFinal = wordObjs[index].highest;
    }
});

if (highestFinal.value === 1 || highestFinal.value === 0) {
    console.log(-1);
}

console.log(highestFinal.fullWord);
