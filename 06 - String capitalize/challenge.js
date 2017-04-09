let str = "hello world";

str = str.split(" ");

for (i = 0; i < str.length; i++) {

 str[i] = str[i].substring(0, 1).toUpperCase() + str[i].substring(1);
}

str = str.join(" ");
//str = str.replace(/,/gi," ");


console.log(str);