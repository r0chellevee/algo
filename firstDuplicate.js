//GIVEN AN ARRAY OF INTEGERS, FIND THE SECOND INSTANCE OF AN INTEGER WHOSE INDEX OCCURS BEFORE THE SECOND INSTANCE OF ANOTHER INTEGER. IF NO DUPLICATES EXIST, RETURN -1

//firstDuplicate([2, 3, 3, 1, 5, 2]) ===> 3
//The second instance of 3 occurs before the second instance of 2

//firstDuplicate([2, 3, 7, 1, 5, 0]) ===> -1

function firstDuplicate(arr, store) {
  //declare variable to build string
  var store = store || []
  //
  //base cases: 
  if (store.includes(arr[0])) { return arr[0] }
  //
  if (arr.length <= 1) { return -1 }
  //
  store.push(arr.shift()) 
  return firstDuplicate(arr, store)
}