function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
      if (num > 0) {
        sum += num;
      }
    }
    return sum;
  }
  const array =  [2, -5, 10, -3, 7];
  console.log(sumOfPositiveNumbers(array));