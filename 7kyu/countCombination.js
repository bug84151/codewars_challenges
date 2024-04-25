function numCombo(a, n) {
  // declare a variable to be returned
  let theCombo = 0;

  for (let i = 0; i <= a.length - 1; i++) {
    // create copy of array
    const arrCopy = a.slice();

    // delete one value
    arrCopy.splice(i, 1);

    // count the modified array with reduce function
    const count = arrCopy.reduce((a, b) => a + b, 0);

    // count equal args 'n' will increase the 'theCombo' value
    theCombo = count === n ? (theCombo += 1) : (theCombo += 0);
  }

  // return the final result
  return theCombo;
}
