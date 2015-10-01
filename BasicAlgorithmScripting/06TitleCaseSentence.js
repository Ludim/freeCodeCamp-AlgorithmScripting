/*
Bonfire: Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/
function titleCase(str) {
  var newStr = str.toLowerCase().split(" ");
  var cap = [];
  for (var i = 0; i < newStr.length; i++) {
    //newStr[i] = newStr[i].replace(charAt(0),charAt(0));
    //newStr[i][0] = newStr[i].charAt(0).toUpperCase();
    cap.push(newStr[i].replace(newStr[i].charAt(0),newStr[i].charAt(0).toUpperCase()));
  }  
  return cap.join(" ");
}


titleCase("I'm a little tea pot");
