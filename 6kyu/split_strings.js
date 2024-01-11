function solution(str) {
  let count = 0;
  let result = [];
  if (str.length % 2 != 0) {
    str += "_";
  }
  while (count < str.length) {
    result.push(str[count] + str[count + 1]);
    count += 2;
  }
  return result;
}
