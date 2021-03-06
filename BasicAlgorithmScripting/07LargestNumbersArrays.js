/*
Bonfire: Return Largest Numbers in Arrays

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i] .

If you are writing your own Chai.js tests, be sure to use a deep equal statement instead of an equal statement when comparing arrays.
*/
function largestOfFour(arr) {
  var largest = [];
  // I had some problems with the last array, so I asked in stackoverflow
  // and they helped me. You can see my question here:
  // http://stackoverflow.com/questions/32771927/why-is-857-larger-than-1000-and-1001-javascript
  for (var i = 0; i < arr.length; i++) {
    largest.push(Math.max.apply(Math,arr[i]));
  }
  return largest;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
