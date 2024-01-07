var isSquare = function (n) {
  if (n == 0) {
    return true;
  } else if (n < 0) {
    return false;
  }
  for (let i = 0; i < n; i++) {
    if (i ** 2 == n) {
      return true;
    }
  }
  return false;
};
