let strArr = ["(1 1)","(1 3)","(3 1)","(3 3)"];

let xMin = 0;
let xMax = 0;
let yMin = 0;
let yMax = 0;

let XArr = [];
let YArr = [];

let reformat = [];

for (var i = 0; i < strArr.length; i++) {
	reformat[i] = strArr[i].split(' ');
	for (var j = 0; j < reformat[i].length; j++) {
		reformat[i][j] = reformat[i][j].replace(/\(|\)/gi,"");
		XArr[i] = parseInt(reformat[i][0]);
		YArr[i] = parseInt(reformat[i][1]);
	}
}

XMax = Math.max.apply(null, XArr);
XMin = Math.min.apply(null, XArr);
YMax = Math.max.apply(null, YArr);
YMin = Math.min.apply(null, YArr);

let area = (XMax - XMin) * (YMax - YMin);

console.log(XArr);
console.log(YArr);
console.log(reformat);
console.log(strArr);

console.log(area);