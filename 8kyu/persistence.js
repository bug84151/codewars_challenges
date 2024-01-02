let num = 9
let numStr = num.toString()
let sumOfProducts = 1
let counter = 0

while (numStr.length > 1) {
    for (let i = 0; i < numStr.length; i++) {
      sumOfProducts = sumOfProducts * numStr[i];
      console.log(sumOfProducts);
      counter++;
      console.log(counter);
    }
    numStr = sumOfProducts.toString()
}