function getArgIndex(arr, num) {
  return arr.concat(num).sort((a,b) => a-b).indexOf(num);
}

// Place num argument into array and find it's index after array is sorted
