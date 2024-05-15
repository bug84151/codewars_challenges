function array_diff(a, b) {
  return a.filter((e) => !b.includes(e));
}

function array_diff(a, b) {
  return a.filter(function (x) {
    return b.indexOf(x) == -1;
  });
}

function arrayDiff(a, b) {
  if (b.length == 0 || a.length == 0) return a;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      if (a[i] == b[j]) {
        a.splice(i, 1);
        i--;
      }
    }
  }
  return a;
}