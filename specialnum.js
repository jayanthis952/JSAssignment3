function isSpecialNumber(num) {
    let sum = 0;
    let tempNum = num;
    while (tempNum > 0) {
      const digit = tempNum % 10;
      sum += factorial(digit);
      tempNum = Math.floor(tempNum / 10);
    }
    return sum === num;
  }
  
  function factorial(num) {
    if (num === 0) {
      return 1;
    }
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }
  
  console.log(isSpecialNumber(145)); 
  console.log(isSpecialNumber(10)); 