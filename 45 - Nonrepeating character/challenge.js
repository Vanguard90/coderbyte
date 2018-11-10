let str = "abcdef";

let statusObj = {};

str.toLowerCase().split(" ").join("").split("").forEach( (arrItem, index) => {
    if (statusObj[arrItem] === undefined) {
        statusObj[arrItem] = {
        'repeat': 1,
        'index': index,
        'letter': arrItem };
    } else {
        statusObj[arrItem].repeat++;
    }
});

let firstNonRepeat;
for (const key in statusObj) {
    if (statusObj.hasOwnProperty(key)) {

        if (statusObj[key].repeat === 1) {

            if (firstNonRepeat === undefined) {
                firstNonRepeat = statusObj[key];
            } else if(statusObj[key].index < firstNonRepeat.index) {
                firstNonRepeat = statusObj[key];
            }
            
        }
        
    }
}
console.log(firstNonRepeat);
console.log(statusObj);