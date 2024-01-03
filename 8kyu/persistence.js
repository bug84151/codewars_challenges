function persistence(num) {
  let numStr = num.toString();
  let counter = 0;

  while (numStr.length > 1) {
    let sumOfProducts = 1;
    for (let i = 0; i < numStr.length; i++) {
      sumOfProducts = sumOfProducts * Number(numStr[i]);
    }
    numStr = sumOfProducts.toString();
    counter = counter + 1;
  }
  return counter;
}
