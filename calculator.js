function add(num1, num2) {
    return num1 + num2;
  }
  
  function subtract(num1, num2) {
    return num1 - num2;
  }
  
  function multiply(num1, num2) {
    return num1 * num2;
  }
  
  function divide(num1, num2) {
    if (num2 === 0) {
      return 'Error: Cannot divide by zero';
    }
    return num1 / num2;
  }
  
  function createCalculator(operator) {
    switch (operator) {
      case '+':
        return add;
      case '-':
        return subtract;
      case '*':
        return multiply;
      case '/':
        return divide;
      default:
        return null;
    }
  }
  
  function calculate(num1, num2, operator) {
    const operation = createCalculator(operator);
    if (operation) {
      return operation(num1, num2);
    }
    return 'Error: Invalid operator';
  }
  console.log(calculate(5, 2, '+')); 
  console.log(calculate(5, 2, '-')); 
  console.log(calculate(5, 2, '*')); 
  console.log(calculate(5, 2, '/')); 
  console.log(calculate(5, 0, '/')); 
  console.log(calculate(5, 2, '%'));  