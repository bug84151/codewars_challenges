function getSum(a, b) {
  let counter = 0;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      counter += i;
    }
  } else {
    for (let i = b; i <= a; i++) {
      counter += i;
    }
  }
  return counter;
}
