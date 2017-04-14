let str = "ooxx";

/* OLD SOLUTION

str = Array.from(str);

let numx = 0;
let numo = 0;

for (i = 0; i < str.length; i++){

if (str[i] == "x") {
	numx += 1;
} else if (str[i] == "o") {
	numo += 1;
}
}

function check(numx, numo){
if (numx%numo === 0 && numx != 0 && numo != 0) {
    return true;
} else {
    return false;
}
}

*/


let numx = str.match(/[x]/gi);
let numo = str.match(/[y]/gi);

function check(numx, numo){
if (numx % numo === 0 && numx != 0 && numo != 0) {
    return true;
} else {
    return false;
}
}
console.log(check(numx,numo));
