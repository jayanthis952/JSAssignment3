function isArmstrongNumber(num) {
   
    const numStr = num.toString();
    const numDigits = numStr.length;
    
    
    let sum = 0;
    for (let i = 0; i < numDigits; i++) {
      const digit = parseInt(numStr[i], 10);
      sum += Math.pow(digit, numDigits);
    }
    
    
    return sum === num;
  }
  console.log(isArmstrongNumber(153)); 
  console.log(isArmstrongNumber(0)); 
  console.log(isArmstrongNumber(370)); 
  console.log(isArmstrongNumber(407)); 
  console.log(isArmstrongNumber(8208)); 
  console.log(isArmstrongNumber(9475)); 