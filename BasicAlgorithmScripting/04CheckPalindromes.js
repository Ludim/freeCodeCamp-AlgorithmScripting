/*
Bonfire: Check for Palindromes

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

You'll need to remove punctuation and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
*/

function palindrome(str) {
  str = str.replace("_","");
  var newStr = str.toLowerCase().replace(/\W/g,"").split("").join("");
  str = str.toLowerCase().replace(/\W/g,"").split("");
  var ot = str.reverse().join("");
  if(newStr == ot) {
    return true;
  } else {
    return false;
  }
}


palindrome("0_0 (: /-\\ :) 0-0");
