let str = "There are seven 77777 words 33333 here.";

str = str.match(/(\b[a-z]+|\b[0-9]+)/gi);



console.log(str.length);

//Has possible incorrect test case, but good enough.