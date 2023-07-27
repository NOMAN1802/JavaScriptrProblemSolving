function findTwoNumbersWithSum(sortedArr, target) {
    for(let i = 1; i < sortedArr.length; i++){
        for(let j = i+1; j < sortedArr.length; j++){
            if(sortedArr[i] + sortedArr[j] == target){
                return [i, j]
            }
        }
    }
  }
  const sortedArray = [1, 3, 6, 8, 11, 15];
  const targetValue = 9;
  console.log(findTwoNumbersWithSum(sortedArray, targetValue));  
//   emtiakbob@gmail.com
//   Emtiaz
//   123456789A