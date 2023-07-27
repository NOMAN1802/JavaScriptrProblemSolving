function findMostFrequentElement(arr) {
    const elementCount = {};
  
    for (const element of arr) {
      if (elementCount[element]) {
        elementCount[element]++;
      } else {
        elementCount[element] = 1;
      }
    }
  
    
    let mostFrequentElement;
    let highestCount = 0;
    for (const element in elementCount) {
      if (elementCount[element] > highestCount) {
        highestCount = elementCount[element];
        mostFrequentElement = element;
      }
    }
  
    return mostFrequentElement;
  }

  const array =  [3, 5, 2, 5, 3, 3, 1, 4, 5];
  console.log(findMostFrequentElement(array));
  