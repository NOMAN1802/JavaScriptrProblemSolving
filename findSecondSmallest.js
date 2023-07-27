function findSecondSmallest(arr) {
    if (!Array.isArray(arr) || arr.length < 2) {
      throw new Error("Input should be an array with at least two elements.");
    }
    const sortedArr = arr.sort((a, b) => a - b);
    return sortedArr[1];
  }

  const input = [8, 5,10, 2, 9, 3, 1, 4, 6, 7];
  const result = findSecondSmallest(input);
  console.log(result);
  