let arr = [7, 6, 4, 1, 7, -2, 3, 12];

const compare = arr.shift();

holderArr = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = arr.length; i < j; j--) {
        if (arr[j] + arr[i] === compare) {
            holderArr.push([arr[i], arr[j]]);
        }
    }
}

if (holderArr.length === 0) {
    console.log(-1);
}

holderArr = holderArr.join(" ");

console.log(holderArr);