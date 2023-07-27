function romanToInt(roman) {
    const romanToInteger = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000,
    };
  
    let result = 0;
    for (let i = 0; i < roman.length; i++) {
      const currentSymbol = roman[i];
      const nextSymbol = roman[i + 1];
      const currentVal = romanToInteger[currentSymbol];
      const nextVal = romanToInteger[nextSymbol];
  
      if (nextVal > currentVal) {
        result += nextVal - currentVal;
        i++; 
      } else {
        result += currentVal;
      }
    }
  
    return result;
  }
console.log(romanToInt("IX"));   
console.log(romanToInt("XXI")); 