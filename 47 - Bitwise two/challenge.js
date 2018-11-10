let strArr = ["10100", "11100"];

let finalString = "";

for (let i = 0; i < strArr.length - 1; i++) {
    for (let j = 0; j < strArr[i].length; j++) {
        if (strArr[i][j] === strArr[i+1][j]) {
            finalString += strArr[i][j];
        } else {
            finalString += "0";
        }
        
    }
    
}

console.log(finalString);