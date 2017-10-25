function palindrome(str) {
  var front = 0;
  var back = str.length - 1;

  while (back > front) {
    while ( str[front].match(/[\W_]/) ) {
      front++;
      continue;
    }
    while ( str[back].match(/[\W_]/) ) {
      back--;
      continue;
    }
    if ( str[front].toLowerCase() !== str[back].toLowerCase()) {
        return false;
    }
    else {
        front++;
        back--;
    }
  }
  return true;
}
