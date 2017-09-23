//CODEWARS: is Isogram
function isIsogram = (str) => {
  let lowerCase = str.toLowerCase();
  let result = true;
  for (var i = 0; i < lowerCase.length; i++) {
    if ((lowerCase.split(lowerCase[i]).length - 1) > 1) {
      result = false;
    }
  }
  return result;
}