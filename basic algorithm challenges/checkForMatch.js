function checkForMatch(arr) {
  return arr[1].toLowerCase().split('').every(function(letter) {
    return arr[0].toLowerCase().indexOf(letter) !== -1;
  });

// Given an array "arr" with two elements, return true if the first element
// contains all the letters of the second element.
