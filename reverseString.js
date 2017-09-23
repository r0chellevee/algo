// REVERSE A STRING IN PLACE SO THAT THE INPUT 'I LOVE TACOS' ==> 'TACOS LOVE I'

const reverseWord = (arr, start, end) => {
  while(start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

const reverseString = (str) => {
  const reversed = str.split('').reverse();
  let start = 0;
  for (var i = 0; i <= reversed.length; i++) {
    if (i === reversed.length || reversed[i] === ' ') {
      reverseWord(reversed, start, i-1);
      start = i + 1;
    }
  }
  return reversed.join('')
}