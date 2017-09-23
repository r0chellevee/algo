//CODEWARS: is Isogram
const isIsogram = (str) => {
  let lowerCase = str.toLowerCase;
  let result = true;
  for (var i = 0; i < str.length; i++) {
    if ((str.split(str[i]).length - 1) > 1) {
      result = false;
    }
  }
  return result;
}