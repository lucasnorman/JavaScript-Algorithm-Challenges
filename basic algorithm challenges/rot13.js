function rot13(str) {
  return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}

// Replace each char in a str with unicode - 13 char
