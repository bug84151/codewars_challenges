// Write a function that doubles every second integer in a list, starting from the left.

function doubleEveryOther(a) {
  for (let i = 1; i < a.length; i += 2) {
    a[i] *= 2;
  }
  return a;
}

console.log(doubleEveryOther([1, 2, 3, 4, 5]))

// modern js
const doubleEveryOther = (a) => a.map((c, i) => (i % 2 == 0 ? c : 2 * c));