/*
Bonfire: Confirm the Ending

Check if a string (first argument) ends with the given target string (second argument).
*/

function end(str, target) {
  var largo = target.length;
  var cadena = str.substr(str.length-largo).toLowerCase();
  
  if (cadena == target) {
    return true;
  } else {
    return false;
  }
}

end("He has to give me a new name", "name");
