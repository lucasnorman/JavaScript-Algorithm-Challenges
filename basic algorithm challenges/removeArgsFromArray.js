function removeArgs(arr) {
  var args = Array.from(arguments).slice(1);
  return arr.filter(function(val) {
    return !args.includes(val);
  });
}

// For arr, argument[0] is an array. Remove additional arguments from
// the array.
