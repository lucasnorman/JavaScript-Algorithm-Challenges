function largestOfArrays(arr) {
  return arr.map(function(group){
    return group.reduce(function(prev, current) {
      return (current > prev) ? current : prev;
    });
  });
}

// Given multpiple arrays, find the largest of each array and return them in an array
