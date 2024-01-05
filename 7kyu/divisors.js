let integer = 13
let divisorArr = []

if (integer > 1) {
  for (i = 0; i < integer; i++) {
    if (integer % i == 0 && i != 1) {
      divisorArr.push(i);
    }

    }
    if (divisorArr.length == 0) {
        console.log(`${integer} is a prime number`);
    }
} 
console.log(divisorArr);