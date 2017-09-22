let strArr =  ["5","4","6","E","1","7","E","E","3","2"];

let holder = [];
	while(strArr.includes("E")) {
		var tempArr = strArr.slice(0, strArr.indexOf("E"));
		tempArr.sort(function(a, b) {return a - b});
		holder.push(tempArr[0]);
		strArr.splice(strArr.indexOf("E"), 1);
		strArr.splice(strArr.indexOf(tempArr[0]), 1);
	}
holder.join(",");

console.log(holder);