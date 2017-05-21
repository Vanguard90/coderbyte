let sen = "a b c dee 99999999"

sen = sen.match(/\b[a-z0-9]+/gi);

sen = sen.sort(function(a,b) {if (b.length > a.length) {return 1;} else {return -1;}});

sen = sen.shift();


console.log(sen);

//Now fully correct!!! :)

/* %100 correct solution:

// we use the regex match function which searches the string for the
  // pattern and returns an array of strings it finds
  // in our case the pattern we define below returns words with
  // only the characters a through z and 0 through 9, stripping away punctuation
  // e.g. "hello$% ##all" becomes [hello, all]
  var arr = sen.match(/[a-z0-9]+/gi);

  // the array sort function takes a function as a parameter
  // which is used to compare each element in the array to the
  // next element in the array
  var sorted = arr.sort(function(a, b) {
    return b.length - a.length;
  });

  // this array now contains all the words in the original
  // string but in order from longest to shortest length
  // so we simply return the first element
  return sorted[0];

  */