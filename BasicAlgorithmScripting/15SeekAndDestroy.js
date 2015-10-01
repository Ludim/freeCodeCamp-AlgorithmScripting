/*
Bonfire: Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
*/
function destroyer(args) {
  args = Array.slice(arguments);
  var arr = args[0];
  for (var i = 1; i < args.length; i++) {
    while (arr.indexOf(args[i]) > -1) {
      //console.log(args[i], unique.indexOf(args[i]));
      arr.splice(arr.indexOf(args[i]),1);
    }
  }
  return arr;
}

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3);
