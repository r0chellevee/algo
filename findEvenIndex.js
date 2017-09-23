//FIND THE INDEX SO THAT THE SUM OF ALL INTEGERS TO THE LEFT OF THAT INDEX IS EQUAL TO SUM OF ALL INTEGERS TO RIGHT OF INDEX

const findEvenIndex = (arr) => {
  for (var i = 1; i < arr.length; i++) {
    if(arr.slice(0, i).reduce((a, b) => a + b) ===
    arr.slice(i+1).reduce((a, b) => a + b))
      return i;
  }
  return -1
}

//findEvenIndex([1,2,3,4,3,2,1]) ==> 3