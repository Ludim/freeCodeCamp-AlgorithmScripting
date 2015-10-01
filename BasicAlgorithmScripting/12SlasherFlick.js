/*
Bonfire: Slasher Flick

Return the remaining elements of an array after chopping off n elements from the head.
*/
function slasher(arr, howMany) {
  // howMany: number of elements to remove
  if (howMany > arr.length) {
    return arr = [];
  } else {
    return arr.slice(howMany,arr.length);
  }
  return arr;
}

slasher([1, 2, 3], 2);
