let strArr = ["1100","0111"];

    var str1 = strArr[0];
    var str2 = strArr[1];
    var newStr = '';
    len = str1.length;

    for (var i = 0; i < len; i++) {
        if(str1.charAt(i) === '1' || str2.charAt(i) === '1') {
            newStr = newStr += '1';
        } else {
            newStr = newStr += '0';
        }
    }

console.log(newStr);