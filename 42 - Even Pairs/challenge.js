let str = "f178svg3k19k46";

let buildNum = '';
let counter = 0;
  for (let i = 1; i < str.length; i++) {
    if (isNaN(str[i] % 2)) {
      counter = 0;
    }
    else if (str[i] % 2 !== 0) {
      buildNum += str[i];
    }
    else if (str[i] % 2 === 0) {
      counter++;
    }
    
    if (counter === 2) { return true; } 
  }
  return false;

//Investigate it more!

console.log(str);