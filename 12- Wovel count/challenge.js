let str = "bzz8*";

let pattern = /[a,e,i,o,u]/gi;

str = str.match(pattern);

if (str === null) {
	str = 0;
	console.log(str);
} else {
	console.log(str.length);
}

/* Fully working solution */
/*
  str = str.toLowerCase();
  var counter = 0;
  for(x in str) {
  	if(str[x] == 'a' || str[x] == 'e'|| str[x] == 'i'|| str[x] == 'o'|| str[x] == 'u') {
      counter++;
    }
  }
  return counter; 
*/