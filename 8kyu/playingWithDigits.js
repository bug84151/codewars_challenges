function digPow(n, p) {
  let strN = n.toString();
  let mySum = 0;

  for (let i = 0; i < strN.length; i++) {
    mySum += Number(strN[i]) ** p;
    p++;
  }

  if (mySum % n == 0) {
    return mySum / n;
  }
  return -1;
}
