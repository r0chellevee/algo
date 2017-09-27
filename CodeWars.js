//VALIDATE PIN CODE

function validatePin(s) {
  if (s.length === 4 || s.length === 6) {
    for (var i = 0; i < s.length; i++) {
      if (isNaN(parseInt(s[i])))
      return false
    }
    return true;
  }
  return false
}


//ACCUMULATE
//accum("abcd");    // "A-Bb-Ccc-Dddd"
//accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//accum("cwAt");    // "C-Ww-Aaa-Tttt"

function accum(s) {
  return s.split('').map((letter, i) => {
    return letter.toUpperCase() + letter.repeat(i).toLowerCase()
  }).join('-')
}

//BASIC OP: basicOp('+', 4, 7)  ==> 11

function basicOp(operation, value1, value2){
  return eval(value1 + operation + value2)
}

//FILTER LIST: given an array of strings and integers, remove all the strings and return array
//filter_list([1,2,'aasf','1','123',123]) ==> [1,2, 123]
function filter_list(l) {
  for (var i = 0; i < l.length; i++) {
    if (typeof l[i] === 'string') {
      l.splice(i--, 1);
    }
  }
  return l
}

//GETSUM: given two integers, a and b, find sum of all numbers in between, including both a and b. If both numbers are equal, return a or b.  
function getSum(a, b) {
  let result = 0;
  let start = Math.min(a, b);
  let end = Math.max(a, b);
  if (a === b) {
    return a;
  } else {
    for (var i = start; i <= end; i++) {
      result += i;
    }
  }
  return result
}

getSum(-1, 2)

//NBYEAR: Given the current population number, a percentage rate (of growth), an integer representing annual increase in population, and a target number of population, how many years will it take for the population to reach or surpass the target population count? 
//nbYear(1500, 5, 100, 5000) ==> 15;

function nbYear(p0, percent, aug, p) {
  let numYears = 0;
  for (var i = p0; i < p; i = i+aug+(i*(percent*.01))) {
    numYears++
  }
  return numYears
}

//DUPLICATE COUNT: Given a string, return count of letters that appear more than once in string. 
//duplicateCount("Indivisibilities") ==> 2 

function objectify(str) {
  const lowercase = str.toLowerCase();
  const store = {};
  lowercase.split('').forEach((letter) => {
    store[letter] = lowercase.split(letter).length - 1;
  });
  return store;
}

function duplicateCount(text){
  let count = 0;
  const obj = objectify(text)
  for (var key in obj) {
    if (obj[key] > 1) {
      count++;
    }
  }
  return count;
}

//A REFACTOR OF THE ABOVE SOLUTION:
function duplicateCount(text){
  return text.toLowerCase().split('').reduce((acc, letter) => {
    //if letter already exists as key, add one
    //else assign default 1
    acc[letter] = acc[letter] ? acc[letter] + 1 : 1;
    //once value at letter reaches 2, increase count by one
    if (acc[letter] === 2) {acc.count++}
    //return accumulator
    return acc;
    //initialize accumulator as object with key count
    //return count
  }, {count: 0}).count;
}

//TITLECASE: Transform a given string so that the first letter of each significant word is capitalized. If given a second argument, it shall be a string of words that should not be capitalized. 
//titleCase('THE WIND IN THE WILLOWS', 'The In') ==> 'Th e Wind in the Willows'

function titleCase(str, delimiter = '') {
  if (str === '') { return '' }
  var result = [];
  var words = str.toLowerCase().split(' ');
  var firstWord = result.push(words[0][0].toUpperCase() + words[0].slice(1))
  var limits = delimiter !== '' ? delimiter.toLowerCase().split(' ') : ''
  for (var i = 1; i < words.length; i++) {
  console.log(limits.includes(words[i]), words[i], limits)
    if (delimiter !== '' && limits.includes(words[i])) {
   
      result.push(words[i]);
    } else {
      result.push(words[i][0].toUpperCase() + words[i].slice(1))
    }
  }
  return result.join(' ');
}
