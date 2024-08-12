// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.
let numbers = [10, 343445353, 3453445, 3453545353453];
let sum;
let count;
for (let i = 0; numbers.length > i; i++) {
    for (let j = 0; numbers.length > j; j++) {
            console.log(numbers[i],numbers[j]);
  }
}

function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};
