function plusOne(digits: number[]): number[] {
  for (let i = digits.length - 1; i >= 0; i--) {
    console.log(digits[i]);
    if ((digits[i] + 1) % 10 === 0) {
      digits[i] = 0;
      continue;
    } else {
      digits[i] = digits[i] + 1;
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
};










