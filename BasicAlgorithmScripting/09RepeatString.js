/*
Bonfire: Repeat a string repeat a string

Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.
*/

function repeat(str, num) {
  if (num < 1) {
    return "";
  }
  var aux = "";
  for (var i = 0;i < num; i++) {
    aux = aux + str;
    console.log(aux);
  }
  return aux;
}

repeat("*", 3);
