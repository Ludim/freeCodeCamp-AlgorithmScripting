/*
Bonfire: Falsy Bouncer

Remove all falsy values from an array.

Falsy values in javascript are false, null, 0, "", undefined, and NaN.
*/
function bouncer(arr) {
  var newArr = [];
  arr.map(function(val) {
    if (val) {
    //if (val != "" && val != false && val && val != 0) {
      //if (isNaN(val)) {
 //       continue;
      //} else {
        newArr.push(val);
      //}
    }
  });
  return newArr;
}

bouncer([false, null, 0, NaN, undefined, '']);
