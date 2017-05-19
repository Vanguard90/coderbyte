let str="12:30pm-12:00am";

let arr = str.split("-");

let num1 = arr[0];

let num1min = 0;

let num2 = arr[1];

let num2min = 0;

if (num1.substring(num1.length-2, num1.length) == "am") {

	num1min += 720;

} else if (num2.substring(num2.length-2, num2.length) == "am") {

	num2min += 720;

}

let matched = str.match(/[0-9]|-|:/gi);

matched = matched.join("");

matched = matched.split("-");

console.log(matched);

let num1Full = matched[0].split(":");
num1min += num1Full[0]*60;
num1min += parseInt(num1Full[1], 10);
let num2Full = matched[1].split(":");

num2min += num2Full[0]*60;
num2min += parseInt(num2Full[1], 10);

console.log(num1min);
console.log(num2min);
console.log(arr);

if (num1min > num2min) {
	console.log(num1min -num2min);
} else {
	console.log(num2min-num1min);
}

//This solution is not fully correct. Does solve 7/10 test cases.

/* Fully correct solution

  const times = str.match(/([am]|[pm])+/g);
  const arr = str.split('-')
    .map(item => item.split(':'))
    .map(item => {
      item[1] = item[1].slice(0, item[1].length - 2)
      return item;
    });
  
  const hour1 = times[0] === 'pm' ? +arr[0][0] + 12 : +arr[0][0];
  const hour2 = times[1] === 'pm' ? +arr[1][0] + 12 : +arr[1][0];
  const min1 = +arr[0][1];
  const min2 = +arr[1][1];
  
  const diff = (hour2 * 60 + min2) - (hour1 * 60 + min1);
  return diff < 0 ? 24 * 60 + diff : diff;

  */
