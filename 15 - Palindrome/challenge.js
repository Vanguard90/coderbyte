let str = "dont nod";

str = str.replace(/\s+/gi, "");

strArray = Array.from(str);

strArrayReverse = strArray.reverse().join("");

if (str == strArrayReverse) {
	return true;
} else {
	return false;
}

console.log(strArrayReverse);