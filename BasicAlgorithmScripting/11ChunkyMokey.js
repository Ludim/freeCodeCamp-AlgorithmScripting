/*
Bonfire: Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a multidimensional array.
*/
function chunk(arr, size) {
  newArr = [];
  var temp = [];
  for (var i = 0; i < arr.length; i++) {
    temp.push(arr[i]);
    if (temp.length == size) {
      newArr.push(temp);
      temp = [];
    }
  }
  if (temp.length != 0) {
    newArr.push(temp);
  }
  return newArr;
}

chunk([0, 1, 2, 3, 4, 5], 4);
