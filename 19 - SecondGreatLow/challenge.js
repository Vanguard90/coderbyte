let arr = [80,80];

arr = arr.sort(function(a,b) {return a-b;});

if (arr.length > 2) {
arr = arr.filter(function(a,b){

return arr.indexOf(a) == b;
});
}

let secLowest = [];
let secHighest = [];

if (arr.length >= 2) {
secLowest = arr[1];
secHighest = arr[arr.length-2];

} else {
secLowest = arr[0];
secHighest = arr[1];
}

let sorted = `${secLowest} ${secHighest}`;

console.log(arr);
console.log(secLowest);
console.log(secHighest);
console.log(sorted);