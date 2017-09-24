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



