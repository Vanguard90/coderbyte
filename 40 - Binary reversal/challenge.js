let str = "47";

str = Number(str).toString(2);

console.log(str);

str = Array.from(str);

str = str.map(item => item == 1 ? item = 0 : item = 1);

console.log(str);

str = str.join("");

let final = parseInt(str,2);

console.log(str);
console.log(final);

// While not accepted by coderbyte, I consider my answer correct.
//At the question, there is no mention of 8-bits. So there is no need for me to fill the remaining area with zeros.