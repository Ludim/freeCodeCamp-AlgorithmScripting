/*
Bonfire: Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWord(str) {
  var arr = str.split(" ");
  var prev = arr[0].length;
  var a = arr.map(function(val){
    if (val.length > prev) {
      prev = val.length;
    }
  }); 
  return prev;
}


findLongestWord("The quick brown fox jumped over the lazy dog");
