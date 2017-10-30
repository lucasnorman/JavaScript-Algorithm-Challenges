// Sum all numbers in range of an array of two numbers.

function sumAll(arr) {
  var big = Math.max(arr[0], arr[1]);
  var small = (Math.min(arr[0], arr[1]) -1);
  return (big*(big+1)/2) - (small*(small+1)/2);
}
